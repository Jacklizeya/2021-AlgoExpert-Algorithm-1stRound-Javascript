// Do not edit the class below except for the insertKeyValuePair,
// getValueFromKey, and getMostRecentKey methods. Feel free
// to add new properties and methods to the class.
class LRUCache {
  constructor(maxSize) {
    this.maxSize = maxSize || 1;
		this.currentSize = 0
		this.cache = {}
		this.doubleLinkedList = new DoubleLinkedList()
  }

  insertKeyValuePair(key, value) {
    // Write your code here.
		if (!(key in this.cache))	{
			if (this.currentSize === this.maxSize) {
				this.evictLeastRecent()
			} else {
				this.currentSize++
			}
			this.cache[key] = new DoubleLinkedListNode(key, value)
		}
		else {
			this.cache[key].value = value 
		}
		
		this.doubleLinkedList.setHeadTo(this.cache[key])

  }

	// return the value then update the linkedList
  getValueFromKey(key) {
    // Write your code here.
		if (!key in this.cache) {return null}
		this.doubleLinkedList.setHeadTo(this.cache[key])
		return this.cache[key].value
  }

  // This one is pretty straight forward
  getMostRecentKey() {
    // Write your code here.
		if (this.doubleLinkedList.head === null) {return} else {return this.doubleLinkedList.head}
  }
	
	evictLeastRecent() {
		this.doubleLinkedList.removeTail()
		// console.log("line45", this.doubleLinkedList)
		if (this.doubleLinkedList.tail.key) {delete this.cache[this.doubleLinkedList.tail.key]}
	}
}

class DoubleLinkedList {
	constructor() {
		this.head = null
		this.tail = null
	}
	
	// consider 5 different situations
	/*
	1. list is empty
	2. list is single
	3. list is more than single, could be the head, could be the tail, could be in the middle 
	*/
	setHeadTo(node) {
		
		if (this.head === null) {
	  		this.head = node
			  this.tail = node
		}
		else if (this.tail === this.head) {
				if (this.head === node) {return} 
			  else {
					this.head = node
					this.head.next = this.tail
					this.tail.prev = this.head
				}
		}
		else {
			if (this.head === node) {return}
			else if (this.tail === node) {
				this.removeTail(); 
				node.removeConnectionsToLinkedList(); 
				this.head.prev = node; 
				node.next = this.head; 
				this.head = node}
			else {
				node.removeConnectionsToLinkedList(); 
				this.head.prev = node; 
				node.next = this.head; 
				this.head = node}
			}
		 console.log("set head here", this.head.key, this.head.prev, this.tail.key, this.tail.next)
		}
	
	/*
	1. list is empty
	2. list is single
	3. list is more than single, could be the head, could be the tail, could be in the middle 
	*/
	removeTail() {
		if (this.tail === null) {return}
		else if (this.tail === this.head) {
			this.head = null
			this.tail = null
			return
		}
		else {
			this.tail = this.tail.prev
			this.tail.next = null
		}
	}
	
	
}

class DoubleLinkedListNode  {
	constructor(key, value) {
		this.key = key
		this.value = value
		this.prev = null
		this.next = null
	}
	// you can call it remove bindings
	removeConnectionsToLinkedList() {
		if (this.prev !== null) {this.prev.next = this.next}
		if (this.next !== null) {this.next.prev = this.prev}
		this.prev = null
		this.next = null
	}
	
}
// Do not edit the line below.
exports.LRUCache = LRUCache;
