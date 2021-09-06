function longestIncreasingSubsequence(array) {
  // Write your code here.
	if (array.lenght === 0) {return []}
	
	let possibleArrays = [  [array[array.length - 1]]  ]
	
	for (i = array.length - 2; i >=0 ; i--) {
		console.log(possibleArrays, i, array[i])
		let startAt = array[i]
		let bestOption
		let options = possibleArrays.filter(subArray => subArray[0] > startAt)
		
		if (options.length !== 0) {options.sort((array1, array2) => {return array2.length - array1.length})
		console.log("line 13", options[0])
		bestOption = [...options[0]]
		bestOption.unshift(startAt)} else {bestOption = [startAt]}
		possibleArrays.push(bestOption)
	}
	
	let result
	let maxLength = - Infinity
	for (let array of possibleArrays) {
		if (array.length > maxLength) {maxLength = array.length; result = array}
	}
	console.log(result)
	return result
}

// Do not edit the line below.
exports.longestIncreasingSubsequence = longestIncreasingSubsequence;
