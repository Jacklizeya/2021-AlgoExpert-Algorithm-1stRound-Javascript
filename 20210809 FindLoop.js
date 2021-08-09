// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findLoop(head) {
  // Write your code here.
	
	
	
	head.position = "start"
	let visitedPositions = ["start"]
	
	let currentNode = head.next
	currentNode.position = 1
	while (!visitedPositions.includes(currentNode.position)) {
		// history, current, next
		console.log(visitedPositions, currentNode.position)
		if (!currentNode.next.position) {currentNode.next.position = currentNode.position + 1}
		visitedPositions.push(currentNode.position)
		currentNode = currentNode.next
	}
	 // I will stop at 9
	console.log(currentNode.value)
	return (currentNode)
	
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.findLoop = findLoop;

