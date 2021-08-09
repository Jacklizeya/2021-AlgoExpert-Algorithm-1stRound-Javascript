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
