// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function nodeSwap(head) {
	
	if (head.next === null) {return head}
  // Write your code here.
	let previousNode = null
	let currentNode = head
	let count = 0
	while(currentNode !== null) {
		if (count % 2 === 0) { currentNode.newNext = !currentNode?.next?.next?.next ? null : currentNode.next.next.next} else {
			currentNode.newNext = previousNode
		}
		count++
		previousNode = currentNode
		currentNode = currentNode.next
	}
	let tail = previousNode
	
	// iterate new head
	newhead = head.next
	previousNode = null
	currentNode = newhead
	while (currentNode !== null) {
		currentNode.next = currentNode.newNext
		delete currentNode.newNext
		previousNode = currentNode
		currentNode = currentNode.next
	}
	if ((count) % 2 === 1) {previousNode.next = tail}

  return newhead;
}

// Do not edit the lines below.
exports.nodeSwap = nodeSwap;
exports.LinkedList = LinkedList;
