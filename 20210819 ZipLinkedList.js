// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function zipLinkedList(linkedList) {
	
	if (linkedList.next === null) {return linkedList}
  // Write your code here.
	let previousNode = null
	let head = linkedList
	let current = linkedList
	let k = 0
	while (current !== null) {
		current.previous = previousNode
		previousNode = current
		current = current.next
		k++
	}
	let tail = previousNode

	let leftSide = head
	let rightSide = tail
	console.log("line 27", leftSide.value, "rightSide", rightSide.value)
	let i = 0
	while (i < Math.floor((k - 1) / 2)) {
		console.log("i", i, "k", k, Math.floor((k - 1) / 2), "leftSide", leftSide.value, "rigthSide", rightSide.value)
		rightSide.next = leftSide.next
		leftSide.next = rightSide
		leftSide = rightSide.next
		rightSide = rightSide.previous
		i++
	}
		rightSide.next = null
		console.log("line 38")
	let pointer = head
	while (pointer !== null) {
		delete pointer.previous
		pointer = pointer.next
	}
	

  return linkedList;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.zipLinkedList = zipLinkedList;
