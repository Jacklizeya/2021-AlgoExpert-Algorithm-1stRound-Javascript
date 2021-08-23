function mergeSort(array) {
  // Write your code here.\
	if (array.length === 0) {return}
	if (array.length === 1) {return array}
	
	let middleIndex = Math.floor ((array.length  - 1) / 2)
	let leftArray = array.slice(0, middleIndex + 1)
	let rightArray = array.slice(middleIndex + 1, array.length)
	console.log("left, right", leftArray, rightArray)
	return merge(mergeSort(leftArray), mergeSort(rightArray))
}

function merge(leftArray, rightArray) {
	if (!leftArray || leftArray.length === 0 ) {return rightArray}
	if (!rightArray || rightArray.length === 0 ) {return leftArray}
	
	let result = []
	while (leftArray.length !==0 && rightArray.length !== 0 ) {
		if (leftArray[0] <= rightArray[0]) {result.push(leftArray[0]); leftArray.shift()} else {result.push(rightArray[0]); rightArray.shift()}
	}
	
	if (leftArray.length === 0 ) {result.push(...rightArray)}
	if (rightArray.length === 0 ) {result.push(...leftArray)}
	return result
}

// Do not edit the line below.
exports.mergeSort = mergeSort;
