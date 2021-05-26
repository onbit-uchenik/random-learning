package main;

import (
	"fmt"
	"strconv"
);

func fizzbuzz(n int) []string {
	ans := make([]string, n);
	for i := range ans {
		if (i+1) % 15 == 0 {
			ans[i] = "FizzBuzz";
		} else if (i+1) % 3 == 0 {
			ans[i] = "Fizz";
		} else if (i+1) % 5 == 0 {
			ans[i] = "Buzz";
		} else {
			ans[i] = strconv.Itoa(i+1);
		}
	}
	return ans;
}

func main() {
	ans := fizzbuzz(15);

	for _, val := range ans {
		fmt.Printf("%s\n", val);
	}
}