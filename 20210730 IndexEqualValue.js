// Image two lines, one with slope = 1, another slope >= 1
// notice you need to keep looking until you find the minimum


function indexEqualsValue(array) {
  // Write your code here.

if (array.length === 0) {return -1}
let result = Infinity
BST(array)
console.log("result", result)
if (result === Infinity) {return -1} else {return result}

	
function BST(input, leftIndex = 0, rightIndex = array.length - 1 ) {
		console.log(input, leftIndex, rightIndex)
    if (input.length === 0) {return}
    if (input.length === 1) {if (input[0] === leftIndex && input[0] < result) {result = input[0]}; return}
		console.log("furthur work")
    let middleIndex = Math.ceil((leftIndex + rightIndex) / 2)
		console.log("middleIndex", middleIndex, array[middleIndex])
    let leftArray = array.slice(leftIndex, middleIndex)
    let rightArray = array.slice(middleIndex + 1, rightIndex + 1)
		console.log("all", "left", "right", array, leftArray, rightArray)
		if (middleIndex === array[middleIndex]) {console.log("case 1"); if (input[middleIndex] < result) {console.log("getonein", input[middleIndex]); result = input[middleIndex]}; BST([...leftArray], leftIndex, middleIndex - 1)}
    if (middleIndex < array[middleIndex]) {  console.log("case 2");BST([...leftArray], leftIndex, middleIndex - 1)}
    if (middleIndex > array[middleIndex]) {  console.log("case 3");console.log(rightArray); BST([...rightArray], middleIndex + 1, rightIndex)}
}	
}

// Do not edit the line below.
exports.indexEqualsValue = indexEqualsValue;

// New Solution on September 25

function indexEqualsValue(array) {
  // Write your code here.
	let minIndex = Infinity
	BFS(0, array.length - 1)
	if (minIndex === Infinity) {return -1} else {return minIndex}
	
	function BFS(leftIndex, rightIndex) {
		if (leftIndex > rightIndex) {return}

		let middleIndex = Math.floor((leftIndex + rightIndex)/2)
		if (array[middleIndex] === middleIndex) {minIndex = Math.min(minIndex, middleIndex); BFS(leftIndex, middleIndex - 1)}
		else if (array[middleIndex] > middleIndex)  {BFS(leftIndex, middleIndex - 1)}
		else {BFS(middleIndex + 1, rightIndex)}
	}
	
}

