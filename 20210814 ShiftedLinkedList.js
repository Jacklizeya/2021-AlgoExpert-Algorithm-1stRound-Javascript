// This is the class of the input linked list.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function shiftLinkedList(head, k) {
  // Write your code here.
	k  = (-k % 6 + 6) % 6
	if (head.next === null ||  k===0) {return head}
	
	
	let oldHead = head
	let count = 0
	let current = head
	let previous = null
	while (count < k) {
		previous = current
		current = current.next
		count ++
	}
	console.log(current.value)
	// break the connection
	previous.next = null
	head = current
	// move to the end
	while (current.next !== null) {
		current = current.next
	}
	console.log(current.value)
	current.next = oldHead
	return head
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.shiftLinkedList = shiftLinkedList;
