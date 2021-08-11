function longestSubstringWithoutDuplication(string) {
  // Write your code here.
	let maxLength = -Infinity
	let resultString = ""
	
	for (let i=0; i < string.length; i++) {
		let startingCharacter = string[i]
		let storage = startingCharacter
		let rightSide = i+1
		while ( !storage.includes(string[rightSide]) && rightSide < string.length) {
			storage += string[rightSide]
			rightSide++
		}
		
		let leftSide = i-1
		while ( !storage.includes(string[leftSide]) && leftSide >= 0) {
			storage += string[leftSide]
			leftSide--
		}
		
		let totalLength = rightSide - leftSide - 1
		if (totalLength > maxLength) {
			maxLength = totalLength;
			resultString = string.substring(leftSide + 1, rightSide)
		}
		
	}
	
	  console.log(resultString)
    return (resultString)
}

// Do not edit the line below.
exports.longestSubstringWithoutDuplication = longestSubstringWithoutDuplication;



/// a more efficient solution found

function longestSubstringWithoutDuplication(string) {
  // Write your code here.
	let startIndex = 0
	let longestSubLength = 0
	let longestSub = ""
	let storage = {}
	let currentLength = 0
	
	for (let i = 0; i < string.length; i++) {
		console.log(i, startIndex, string[i], storage[string[i]])
		if (!storage[string[i]] && storage[string[i]] !==0 ) {storage[string[i]] = i} else {
		startIndex = Math.max(startIndex, storage[string[i]] + 1)
		storage[string[i]] = i
		}
		currentLength = i - startIndex + 1
		if (currentLength > longestSubLength) {longestSubLength = currentLength; longestSub = string.substring(startIndex, i+1)}
		console.log(i, startIndex)
	}
	
	console.log(longestSub)
	return longestSub
}

// Do not edit the line below.
exports.longestSubstringWithoutDuplication = longestSubstringWithoutDuplication;

