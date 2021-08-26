// Only pass 4 cases

// This is the class of the input linked list.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function rearrangeLinkedList(head, k) {
  // Write your code here.
	let firstSmaller 
	let firstBigger 
	let lastSmaller
	
	let previous = null
	let currentNode = head
	while (currentNode !== null) {
	 		console.log(currentNode.value)
			if (!firstBigger) {if (currentNode.value >= k) {firstBigger = currentNode}}
			if (!firstSmaller) {if (currentNode.value < k) {firstSmaller = currentNode; head = firstSmaller}}   
		  if (!lastSmaller) {if (currentNode.value < k) {lastSmaller = currentNode}}
		
			if (currentNode.value >= k) {
				previous = currentNode
				currentNode = currentNode.next
			} else {
				previous.next = currentNode.next
				currentNode.next = firstBigger
				lastSmaller.next = currentNode
				lastSmaller = currentNode
				currentNode = previous.next
			}
	}
	return head
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.rearrangeLinkedList = rearrangeLinkedList;
