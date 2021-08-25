// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function linkedListPalindrome(head) {
  // Write your code here.
	if (head.next === null) {return true}
	
	let previousNode = null
	let currentNode = head
	let count = 0
	while (currentNode !== null ) {
		currentNode.previous = previousNode
		previousNode = currentNode
		currentNode = currentNode.next
		count++
	}

	let tail = previousNode
	
	let front = head
	let back = tail
	console.log(front, "tail", back)
	while (count >= 0) {
		if (front.value !== back.value) {return false}
		front = front.next
		back = back.previous
		count -= 2
	}

	
  return true;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.linkedListPalindrome = linkedListPalindrome;
