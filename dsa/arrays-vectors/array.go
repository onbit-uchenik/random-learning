package main

import "fmt"

func main() {
	// It will automatically allocate 
	// dynamic array of size 4. In go this is not array
	// but slice
	slice := []int{1,2,3,4}

	// This will be array
	// whose elements will be counted by go compiler

	array := [...]int{3,43,12,1,3,4,5,6,7,8,2,2,56,7,7,8,2}

	// appending to array will throw error
	// array = append(array, 45) // first argument to append must be slice; have [17]int

	// adding an element into slice
	slice = append(slice, 23)

	// printing slice
	fmt.Println("slice", slice)

	// printing array
	fmt.Println("array", array)

	// printing length of array
	fmt.Println("len array ", len(array))
	
	// is there capacity of array
	fmt.Println("cap array", cap(array))

	// printing len of slice
	fmt.Println("len slice: ", len(slice))

	// printing cap of slice
	fmt.Println("cap slice: ", cap(slice))

	slice2 := []int{1,2,3,4,5,6,7,8,9, 10, 11, 12, 13,14,15}

	fmt.Println("slice2 len", len(slice2), "slice2 cap", cap(slice2));

}