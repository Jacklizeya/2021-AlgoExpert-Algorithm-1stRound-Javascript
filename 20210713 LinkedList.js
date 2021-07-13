// This is an input class. Do not edit.
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    // Write your code here.
	if (this.head === null) {this.head = node; this.tail = node; return}
	this.insertBefore(this.head, node)
	 }

  setTail(node) {
    // Write your code here.
	if (this.tail === null) {this.head = node; this.tail = node; return}
	this.insertAfter(this.tail, node)
  }

  insertBefore(node, nodeToInsert) {
    // Write your code here.
		if (this.head === null) {return}
		// warning sign here, they could want to insert one more head
		if (node === nodeToInsert) {
			return
		}
		
		this.remove(nodeToInsert)
		// after delete
		// situation 1
		if (this.head === null && this.tail === null) {return}
		// situation 2
		if (this.head === node && this.tail === node) {node.prev = nodeToInsert; nodeToInsert.next = node; nodeToInsert.prev = null; this.head = nodeToInsert; return}
		// situation 3		
		if (node === this.head) {node.prev = nodeToInsert; nodeToInsert.next = node; nodeToInsert.prev = null; this.head = nodeToInsert; return}
		// situation 4
		nodeToInsert.prev = node.prev
		nodeToInsert.next = node
		node.prev.next = nodeToInsert
		node.prev = nodeToInsert
  }

  insertAfter(node, nodeToInsert) {
    if (this.tail === null) {return}
		this.remove(nodeToInsert)
		// after delete
		// situation 1
		if (this.head === null && this.tail === null) {return}
		// situation 2
		if (this.head === node && this.tail === node) {node.next = nodeToInsert; nodeToInsert.prev = node; nodeToInsert.next = null; this.tail = nodeToInsert; return}
		// situation 3		
		if (node === this.tail) {node.next = nodeToInsert; nodeToInsert.prev = node; nodeToInsert.next = null; this.tail = nodeToInsert; return}
		// situation 4
		nodeToInsert.next = node.next
		nodeToInsert.prev = node
		node.next.prev = nodeToInsert
		node.next = nodeToInsert
  }

  insertAtPosition(position, nodeToInsert) {
    // Write your code here.
		this.remove(nodeToInsert)
	
		if (position === 1) { this.setHead(nodeToInsert); return}
		let current = this.head
		let location = 1
		// warning here, position - 1 as you removed the old one
		while (current !== null) {
			if ( location === position - 1 ) { this.insertBefore(current, nodeToInsert); return}
			current = current.next; 
			location++
		}
  }

  removeNodesWithValue(value) {
    // Write your code here.

		let current = this.head
		while (current !== null) {
			if (current.value === value) {this.remove(current)}
			current = current.next; }
  }

  remove(node) {
    // Write your code here.
		if (this.head === null) {return}
		if (node === this.head) {this.head = this.head.next; if (this.head !== null) {this.head.prev = null} else {this.tail = null}; return }
		if (node === this.tail) {this.tail = this.tail.prev; if (this.tail !== null) {this.tail.next = null} else {this.head = null}; return }
		// as long as node is isolated, you do not worry about this
		// add if in case the node doesnot exist at all, node will not have .prev or .next property
		if (node.prev !==null) {node.prev.next = node.next}
		if (node.next !==null) {node.next.prev = node.prev}	
	}

  containsNodeWithValue(value) {
    // Write your code here.
	let current = this.head
	while (current !== null) {
		if (current.value === value) {return true}
		current = current.next
	}
	return false
	}
}

// Do not edit the lines below.
exports.Node = Node;
exports.DoublyLinkedList = DoublyLinkedList;
