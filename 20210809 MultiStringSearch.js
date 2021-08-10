function multiStringSearch(bigString, smallStrings) {
  // Write your code here.
	let result = []
for ( i=0; i < smallStrings.length; i++) {
    let subResult = false
    let target  = smallStrings[i]
    for (j=0; j < bigString.length; j++) {
        if (target[0] === bigString[j]) { if (target === bigString.substring(j, j + target.length)) {subResult = true; break;}}
    }
    result.push(subResult)
}

	console.log(result)
	return result
}

// Do not edit the line below.
exports.multiStringSearch = multiStringSearch;
