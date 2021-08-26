// Only pass 4 cases
// Just one change: if no first bigger, then just move to next one will increase to 8/11
// The success rate jumps to 10/11
// After 2 days of grinding, finally passed 11/11

// Solution:
/*
	Can't really do anything before find the first (Greater or equal to K)
	Once you find it, smaller ones go to the front, biggerones does not matter, same ones put in front as "bigger part"

*/




// This is the class of the input linked list.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
/// find the first bigger one as the pivot point, later bigger one no need to worry, smaller one insert to pivot's front

function rearrangeLinkedList(head, k) {
  // Write your code here.
	let firstSmaller 
	let firstBigger 
	let lastSmaller
	let previous = null
	let currentNode = head
	
	while (currentNode !== null) {
	 		console.log(currentNode.value, firstBigger?.value, lastSmaller?.value)
		
			if (!firstSmaller) {if (currentNode.value < k) {firstSmaller = currentNode; lastSmaller = currentNode; head = firstSmaller}}  
		
			if (!firstBigger) {
				if (currentNode.value >= k) {firstBigger = currentNode} else {lastSmaller = currentNode}
				previous = currentNode
				currentNode = currentNode.next
			} else if (currentNode.value < k) {
				previous.next = currentNode.next
				lastSmaller.next = currentNode
				lastSmaller = currentNode
				lastSmaller.next = firstBigger
				currentNode = previous.next
			} else if (currentNode.value > k) {
				previous = currentNode
				currentNode = currentNode.next
			}
		    else {
				previous.next = currentNode.next
				if (lastSmaller) {lastSmaller.next = currentNode} else {head = currentNode}
				currentNode.next = firstBigger
				firstBigger = currentNode
				currentNode = previous.next
				}
	}
	return head
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.rearrangeLinkedList = rearrangeLinkedList;
