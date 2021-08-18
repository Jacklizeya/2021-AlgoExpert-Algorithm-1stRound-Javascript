// Do not edit the class below except for
// the insert method. Feel free to add new
// properties and methods to the class.
class ContinuousMedianHandler {
  constructor() {
    // Write your code here.
		this.lowers = new Heap (comparisonFuncMax, []);
		this.greaters = new Heap (comparisonFuncMin, []) 
    this.median = null;
  }

  insert(number) {
    // Write your code here.
		console.log("enetering insert", number, this.lowers.heap, "left length", this.lowers.heap.length, this.greaters.heap)
		if (this.lowers.heap.length === 0 || number < this.lowers.peek()) {
			console.log("coming to left")
			this.lowers.insert(number)
		} else {
			console.log("coming to right")
			this.greaters.insert(number)
		}
		
		this.rebalanceHeaps()
		this.updateMedian()
  }

	rebalanceHeaps() {
		  console.log("entering rebalancing")

			if (this.lowers.heap.length - this.greaters.heap.length >= 2) {
				let transfer = this.lowers.heap.remove()
				this.greaters.insert(transfer)
			}
			if (this.greaters.heap.length - this.lowers.heap.length >= 2) {
				let transfer = this.greaters.remove()
				console.log("********** this.greaters", this.greaters.heap)
				this.lowers.insert(transfer)
			}
			console.log("finishing rebalancing", this.lowers.heap, this.greaters.heap)
		}	

	updateMedian() {
		  console.log("entering updating median", this.lowers.heap, this.greaters.heap)
		  console.log("length comparison", this.lowers.length, this.greaters.length)
			if (this.lowers.length === this.greaters.length) {this.median = (this.lowers.peek() + this.greaters.peek()) /2}
		  else if (this.lowers.length > this.greaters.length) {this.median = this.lowers.peek()}
		  else {this.median = this.greaters.peek()}
		  console.log(this.median)
	}
	
  getMedian() {
    return this.median;
  }
}

class Heap {
	constructor(comparisonFunc, array) {
		this.comparisonFunc = comparisonFunc;
		this.heap = this.buildHeap(array);
		this.length = this.heap.length;
	}

    buildHeap(array) {
        let lastParentIndex = Math.floor((array.length - 2) / 2)
        for (let i = lastParentIndex; i >=0; i--) {
            console.log(i)
            this.siftDown(i, array.length - 1, array)
        }
        return array
    }

    insert(number) {
        console.log("before pushing", this.length, this.heap, this.heap.length)
        this.heap.push(number)
        console.log("after pushing", this.length, this.heap, this.heap.length)
        this.siftUp(this.heap.length - 1, this.heap)
			  console.log("after sifting up", this.heap)
			  this.length ++
    }

    siftDown(currentIndex, maxIndex, array) {
        console.log("sift down here", currentIndex, maxIndex)
        // do we have child?
        while (2 * currentIndex + 1 <= maxIndex) {
            console.log("I have child")
            // do we have right Child?
            let leftChildIndex = 2 * currentIndex + 1
            let rightChildIndex = (2 * currentIndex + 2 <= maxIndex) ?  2 * currentIndex + 2 : null   
            if (rightChildIndex === null) {
                console.log("I have only left Child", currentIndex, leftChildIndex)

                if (this.comparisonFunc(array[currentIndex], array[leftChildIndex])) { 
                    this.swap(currentIndex, leftChildIndex, array) 
                    currentIndex = leftChildIndex
                } else {break;}
            } else {
                console.log("I have two Child", array[currentIndex], array[leftChildIndex], array[rightChildIndex], 
														this.comparisonFunc, 
														this.comparisonFunc(array[currentIndex], array[leftChildIndex]),
													  this.comparisonFunc(array[currentIndex], array[rightChildIndex]),
													 )
                if (this.comparisonFunc(array[rightChildIndex], array[leftChildIndex]) && this.comparisonFunc(array[currentIndex], array[leftChildIndex])) {
									console.log("switch with left")
									this.swap(leftChildIndex, currentIndex, array); currentIndex = leftChildIndex}
                else if (this.comparisonFunc(array[leftChildIndex], array[rightChildIndex]) && this.comparisonFunc(array[currentIndex], array[rightChildIndex])) {
									console.log("switch with right")
									this.swap(rightChildIndex, currentIndex, array); currentIndex = rightChildIndex}
                else {
									console.log(" no switch ")
									break;}
            } 
        }
    }

    siftUp(currentIndex, array) {
        console.log("entering sifting up", currentIndex, array)
        while (currentIndex > 0) {
            let parentIndex = Math.floor((currentIndex - 1) / 2)
						console.log(array[parentIndex], array[currentIndex], this.comparisonFunc(array[parentIndex], array[currentIndex]))
            if (this.comparisonFunc(array[parentIndex], array[currentIndex])) {
							  console.log(" *** going t swap")
                this.swap(parentIndex, currentIndex, array)
                currentIndex = parentIndex
							  console.log("after swappping", array)
            } else {break;}
        }
    }

    swap(i, j, array) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp
    }

    remove() {
			  console.log("%%%%% entering removing", this.heap)
				let toBeRemoved = this.heap[0]
        this.swap(0, this.length - 1, this.heap) 
        this.heap.pop()
			  console.log("%%%%%  before sifting down", this.heap)
        this.siftDown(0, this.heap.length - 1, this.heap)
		    console.log("%%%%% finishing removing", this.heap)
			  this.length--
			  return toBeRemoved
    }

    peek() {
        return this.heap[0]
    }
}

function comparisonFuncMax(parent, child) {
// this needs to be swapped if it is MaxHeap
    return parent < child
}

// minHeap for the greaters side  
function comparisonFuncMin(parent, child) {
    return parent > child
}
	
	
	
	
	
	
	


// Do not edit the line below.
exports.ContinuousMedianHandler = ContinuousMedianHandler;
