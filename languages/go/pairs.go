package main

import ( 
	"fmt"
	"sort"
);

func brute_force(arr []int, sum int) (a int,b int) {
	isFound := false;
	for i := range arr {
		for j:=i+1; j<len(arr); j++ {
			if ((arr[i] + arr[j]) == sum) {
				a = arr[i];
				b = arr[j];
				isFound = true;
				break;
			}
		}
		if (isFound) {
			break;
		}
	}
	return a,b;
}
// optimised approach O(nlogn)
func optimised_approach(arr []int, sum int) (a int, b int) {
	sort.Ints(arr);
	for i := range arr {
		toSearch := sum - arr[i];
		if toSearch >= arr[i] {
			isFound := sort.SearchInts(arr[i+1:], toSearch);
			if isFound != len(arr[i+1:]) {
				a = toSearch;
				b = arr[i];
				break;
			}
		} 
	}
	return a, b;
}

// time-complexity O(n)
func more_optimised_approach(arr []int, sum int) (a int, b int) {
	set := make(map[int]bool);
	// this approach is wrong because we cannot add same number twice
	// and if we search in this way it might happen we took sum of 
	// one element twice.
	// for example search for 4 and there is element 2 so
	// and when we search for it we will get 2 again and we 
	// assume we have two pairs of 2 while we only have one single
	// element as 2
	for _, val := range arr {
		set[val] = true;
	}
	for _, val := range arr {
		if set[sum-val] {
			a = val;
			b = sum - val;
			break;
		}
	}
	return a, b;
}

func more_optimised_correct_approach(arr []int, sum int) (a int, b int) {
	set := make(map[int]bool);

	for _, val := range arr {
		if set[sum-val] {
			a = val;
			b = sum - val;
			break;
		}
		set[val] = true;
	}

	return a,b;
}

func main() {
	arr := []int{1, 1, 1, 1, 1};
	sum := 4;
	// brute_force approach
	a,b := brute_force(arr, sum);
	fmt.Printf("%d %d\n", a, b);

	// this approach is wrong although optimised
	e,f := more_optimised_approach(arr, sum);
	fmt.Printf("%d %d\n", e, f);

	// this approach is right and optimised
	g, h := more_optimised_correct_approach(arr, sum);
	fmt.Printf("%d %d\n", g, h);

	// optimised approach O(nlogn)
	c,d := optimised_approach(arr, sum);
	fmt.Printf("%d %d\n", c, d);

}