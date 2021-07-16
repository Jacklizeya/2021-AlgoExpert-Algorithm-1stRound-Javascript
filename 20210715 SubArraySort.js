function subarraySort(array) {
  // Write your code here.
	let copy = [...array]
	copy.sort((a, b) => {return a -b})
	let result = [null, null]
	target  = "different"
	for (i = 0; i < array.length; i ++) {
		if (array[i] !== copy[i]) {result[0] = i; break}
	}
	
	for (j = array.length - 1; j >= 0; j--) {
		if (array[j] !== copy[j]) {result[1] = j; break}
	}
	
	if (result[0] === null && result[1] === null) {return [-1, -1]} else {return result}
	
}

// Do not edit the line below.
exports.subarraySort = subarraySort;
