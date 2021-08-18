function sortKSortedArray(array, k) {
  // Write your code here.
	let currentIndex = 0
  let storageHeap = new minHeap(array.slice(0, currentIndex + k + 1))
	console.log(storageHeap)
	
	while (currentIndex < array.length) 
  {
	console.log("currentIndex", currentIndex)
	array[currentIndex] = storageHeap.remove()
	console.log(array, storageHeap.heap)
	if (array[currentIndex + k + 1] !== undefined) {
		console.log("going to add more for the heap")
		storageHeap.insert(array[currentIndex + k + 1])}
		currentIndex ++
	}
	return array
}

// Do not edit the line below.
exports.sortKSortedArray = sortKSortedArray;


class minHeap {
	constructor(array) {
		this.heap = this.buildHeap(array)
	}
	
	buildHeap(array) {
        this.heap = array
		let lastParent = Math.floor ((array.length - 2) / 2)
		for (let i = lastParent; i >=0; i--) {
            // console.log("initialize", i)
			this.siftDown(i, array.length - 1, array)
		}	
		return array
	}
	
	siftDown(currentIndex, maxIndex, array) {
		// we have at least one child
	  while (2 * currentIndex + 1 <= maxIndex) {
			let leftChildIndex = 2 * currentIndex + 1
			let rightChildIndex = 2 * currentIndex + 2 <= maxIndex? 2 * currentIndex + 2 : null
			if (rightChildIndex === null) {
				if (array[leftChildIndex] < array[currentIndex]) {this.swap(leftChildIndex, currentIndex, this.heap)} 
				else {break}
			}
			else {
				// i have two children
				if (array[leftChildIndex] <= array[rightChildIndex] && array[leftChildIndex] < array[currentIndex]) {
					this.swap(leftChildIndex, currentIndex, this.heap)
					currentIndex = leftChildIndex
				}
				else if (array[rightChildIndex] <= array[leftChildIndex] && array[rightChildIndex] < array[currentIndex]) {
					this.swap(rightChildIndex, currentIndex, this.heap)
					currentIndex = rightChildIndex
				}
				else {break}
			}
		}
	}
	
	siftUp (currentIndex, array) {
		console.log("entering sifting up", currentIndex, array)
		while (currentIndex > 0) {
			let parentIndex = Math.floor((currentIndex - 1) / 2)
			if (array[currentIndex] < array[parentIndex]) {
				this.swap(currentIndex, parentIndex, this.heap)
				currentIndex = parentIndex
			} else {break;}
		}
	}
	
	remove() {
		let itemToRemove = this.heap[0]
		this.swap(0, this.heap.length - 1, this.heap)
		this.heap.pop()
		this.siftDown(0, this.heap.length - 1, this.heap)
    return itemToRemove
	}

  insert(element) {
				console.log("entering insert", element)
        this.heap.push(element);
        this.siftUp(this.heap.length - 1, this.heap)
    }
	
	swap(i, j, array) {
        // console.log("entering swap", i, j, array)
		let temp = array[i]
		array[i] = array[j]
		array[j] = temp
	}
	
	
}
