// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
	console.log(head, k)
  // Write your code here.
	let totalCount = 1
	let currentNode = head
	
	while (currentNode.next !== null) {
		currentNode = currentNode.next		
		totalCount++
	}
	
	console.log("totalCount", totalCount)
	let countFromHead = totalCount - k
	console.log("countFromHead", countFromHead)
	
	if (countFromHead === 0) {head.value = 1; head.next = head.next.next } else {
	let forwardCount = 0
	let previousNode 
	currentNode = head
	while (forwardCount < countFromHead) {
		previousNode = currentNode
		currentNode = currentNode.next
		forwardCount ++
		console.log(forwardCount)
		}
		
		previousNode.next = currentNode.next}
	
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeKthNodeFromEnd = removeKthNodeFromEnd;
