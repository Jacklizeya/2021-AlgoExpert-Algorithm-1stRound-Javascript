// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    // Write your code here.
		const lastParentIndex = Math.floor((array.length - 2)/2)
		for (let i = lastParentIndex; i >=0; i--) {
			this.siftDown(i, array.length-1, array)
		}
		return array
  }

  siftDown(index, max, heap) {
    // Write your code here.
		console.log("siftDown", index, max, heap)
		// no child || have big child, two child, one child
		if ( 2*index + 1 > max || (heap[index] < heap[2*index + 1] && heap[index] < heap[2*index + 2])) {return}
		
		if (2*index + 2 <= max) {
			if (heap[2*index + 1] <= heap[2*index + 2]) {this.swap(index, 2*index + 1, heap); this.siftDown(2*index + 1, max, heap)}
			else {this.swap(index, 2*index + 2, heap); this.siftDown(2*index + 2, max, heap)}}
		if (2*index + 1 <= max && 2*index +2 > max) {
			if (heap[2*index + 1] < heap[index]) {this.swap(index, 2*index + 1, heap); this.siftDown(2*index + 1, max, heap)}
  }}

  siftUp(index, array) {
		console.log("siftup", index, array)
    // Write your code here.
		if (index === 0 || array[index] >= array[Math.floor((index - 1)/2)]) {return}
		if (array[index] < array[Math.floor((index - 1)/2)]) {
			this.swap(index, Math.floor((index - 1)/2), array)
			this.siftUp(Math.floor((index - 1)/2), array)
		} 
  }

  peek() {
    // Write your code here.
		return this.heap[0]
  }

  remove() {
    // Write your code here.
		console.log("remove")
		this.swap(0, this.heap.length-1, this.heap)
		let valueToRemove = this.heap.pop()
		this.siftDown(0, this.heap.length-1, this.heap)
		return valueToRemove
  }

  insert(value) {
    // Write your code here.
		console.log("insert")
		this.heap.push(value)
		this.siftUp(this.heap.length - 1, this.heap)
  }
	
	swap(i, j, heap) {
		console.log("swap", i, j, heap)
		let temporary = heap[i]
		heap[i] = heap[j]
		heap[j] = temporary
	}
}

// Do not edit the line below.
exports.MinHeap = MinHeap;
