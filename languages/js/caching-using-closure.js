/**
 * Author: Anubhav Vats
 * Date-created: 03-04-2021
 * Date-modified: 03-04-2021
 * Description: Closure is a technique through which functions access the lexical-scope variables even if the
 *              calling point of the function doesnot comes under the lexixal scope. Using this technique we can much modular
 *              caching algorithms or the algorithms which requires memoization. Learned from the practice assignment of You Dont
 *              Know Js: Scopes and Closure by Kyle Simpson.
 */
var isPrimeOptimised = (function isPrime() {
    var primes = new Set();
    var nonPrimes = new Set();

    return function isPrime(v) {
        if (primes.has(v)) {
            return true;
        }
        else if (nonPrimes.has(v)) {
            return false;
        }
        else {
            if (v === 1) return !nonPrimes.add(v);
            if ( v === 2 || v === 3) return !!primes.add(v);
            if ( v % 2 === 0 || v % 3 === 0) return !nonPrimes.add(v);
            var vSqrt = Math.sqrt(v);
            for(let i = 5; i <= vSqrt; i += 6) {
                if(v % i === 0 || v % (i + 2) === 0) {
                    return !nonPrimes.add(v);
                }
            }
            return !!primes.add(v);
        } 
    }
})();

function factorize(v) {
    if (!isPrimeOptimised(v)) {
        let i = Math.floor(Math.sqrt(v));
        while (v % i != 0) {
            i--;
        }
        return [
            ...factorize(i),
            ...factorize(v / i)
        ];
    }
    return [v];
}

var factorise = (function factorize(){
    var cache = new Map();

    return function factorise(num) {
        if(cache.has(num)) return cache.get(num);

        if(!isPrimeOptimised(num)) {
            var i  = Math.floor(Math.sqrt(num));
            while( num % i !== 0 ) {
                i--;
            }
            cache.set(num, [...factorise(i), ...factorise(num/i)]);
            return cache.get(num);
        }
        cache.set(num, [num]);
        return cache.get(num);  
    }

})();

// using closure for rotating values sequentially
var rotateValues = function rotateValues(...values) {
    let currentValue = 0;

    return function rotate() {
        let returnValue = values[currentValue];
        currentValue = (currentValue + 1) % values.length;
        return returnValue;
    }
};
