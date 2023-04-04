package main;

import (
	"fmt"
	"sort"
);

func main() {
	// to sort integers
	arr := []int{23,1,12,34,21,5,6,7};
	sort.Ints(arr);
	for _, val := range arr {
		fmt.Printf("%d\t", val);
	}
	fmt.Printf("\n");

	// to sort floats64
	float64arr := []float64{3.232,3421.1123,0.0012321,321234.1222,2.333333};
	sort.Float64s(float64arr);
	for _, val := range float64arr {
		fmt.Printf("%f\t", val);
	}
	fmt.Printf("\n");

	// to sort strings
	stringsarr := []string{"yashish dua", "anubhav", "aryan", "mudit", "pooja thakrani", "ritika"};
	sort.Strings(stringsarr);
	for _, val := range stringsarr {
		fmt.Printf("%s\t", val);
	}
	fmt.Printf("\n");

	// sorting slice of uint8
	uint8arr := []uint8{1,7,3,6,8};
	// sort.Ints(uint8arr); // cannot use uint8arr (type []uint8) as type []int in argument to sort.Ints
	sort.Slice(uint8arr, func (i, j int) bool {
		// given i < j; so for increasing order uint8arr[i] < uint8arr[j]
		return uint8arr[i] < uint8arr[j];
		// to reverse the order of sort
		// return uint8arr[i] > uint8arr[j]
	});
	for _, val := range uint8arr {
		fmt.Printf("%d", val);
	}
	fmt.Printf("\n");

	// similarly we can sort slice of struct
	programmers := []struct {
		name string
		lang []string
		experience int
	}{
		{ "anubhav vats", ["c", "c++", "js", "go"], 1 },
		{ "manik goel", ["c", "c++", "python", "go"], 1 },
		{ "aryan maurya", ["elixir", "bash", ] }
	}

}