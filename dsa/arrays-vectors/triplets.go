package main

import (
	"fmt"
	"sort"
)

func brute_approach(arr []int, sum int) (ans [][]int) {
	sort.Ints(arr);
	for i := range arr {
		for j := i+1; j < len(arr); j++ {
			for k := j+1; k < len(arr); k++ {
				if arr[i] + arr[j] + arr[k] == sum {
					temp := []int{arr[i], arr[j], arr[k]};
					ans = append(ans, temp);
				}
			}
		}
	}
	return ans;
}

func print(matrix [][]int) {
	for _, arr := range matrix {
		for _, val := range arr {
			fmt.Printf("%d\t", val);
		}
		fmt.Printf("\n");
	}
}

func main() {
	arr := []int{1,2,15,5,4,6,9,8,7,3};
	sum := 18
	ans1 := brute_approach(arr, sum);
	print(ans1);
}