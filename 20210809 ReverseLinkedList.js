// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  // Write your code here.
	
	head.previous = null
	
	let currentNode = head
	while (currentNode.next !== null) {
		currentNode.next.previous = currentNode;
		currentNode = currentNode.next;
	}
	
	head = currentNode
	
	while (currentNode !== null) {
		currentNode.next = currentNode.previous
		delete currentNode.previous		
		currentNode = currentNode.next
	}
	
  return head	
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.reverseLinkedList = reverseLinkedList;
