// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function mergeLinkedLists(headOne, headTwo) {
	if (headOne.value === null && headTwo.value === null) {return null}
	if (headOne.value === null && headTwo.value !== null) {return headTwo}
	if (headOne.value !== null && headTwo.value === null) {return headOne}
  // Write your code here.
	// iterate through then store them in an queue/array
	let storageQueueOne = iterate(headOne)
	let storageQueueTwo = iterate(headTwo)
	// console.log(storageQueueOne)
	// console.log(storageQueueTwo)
	// let mergedArray = [...storageQueueOne]
	// mergedArray.push(...storageQueueTwo)
	// mergedArray.sort((a, b)=> {return a-b})
	let mergedArray = []
	// let i = 0
	// let j = 0
	while (storageQueueOne.length !==0 && storageQueueTwo.length !== 0) {
		if (storageQueueOne[0] <= storageQueueTwo[0]) {mergedArray.push(storageQueueOne[0]); storageQueueOne.shift()} else {
			mergedArray.push(storageQueueTwo[0]); storageQueueTwo.shift()
		}
	}
	if (storageQueueOne.length === 0) {mergedArray.push(...storageQueueTwo)} else {mergedArray.push(...storageQueueOne)}
	
	console.log(mergedArray)
	let ArrayOfNodes = mergedArray.map(value => new LinkedList(value))
	console.log(ArrayOfNodes)
	
	for (let i = 0; i < ArrayOfNodes.length  -1 ; i++) {
		console.log(i)
		ArrayOfNodes[i].next = ArrayOfNodes[i + 1]
	}
	console.log(ArrayOfNodes)
	return ArrayOfNodes[0]
}

function iterate(head) {
	let storageArray = []
	let currentNode = head
	while (currentNode !== null) {
		storageArray.push(currentNode.value)
		currentNode = currentNode.next
	}
	return storageArray 
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.mergeLinkedLists = mergeLinkedLists;
