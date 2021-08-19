function mergeSortedArrays(arrays) {
  // Write your code here.
	
	
	let result = [...arrays[0]]

  for (i = 1; i < arrays.length; i++) {
		result = merge(result, arrays[i])
		console.log(result)
	}
		
	return result
}

 function merge(array1, array2) {
	 console.log("going to merge")
	 let combined = []
	 
	 while(array1.length > 0 && array2.length > 0) {
		 console.log(array1, array2)
		 if (array1[0] <= array2[0]) {console.log("one push"); combined.push(array1[0]); array1.shift()}
		 else {console.log("another push"); combined.push(array2[0]); array2.shift()}
	 }
	 
	 if (array1.length !== 0) {combined.push(...array1)} 
	 if (array2.length !== 0) {combined.push(...array2)} 
	 console.log("combined", combined)
   return combined
 }

// Do not edit the line below.
exports.mergeSortedArrays = mergeSortedArrays;
