function heapSort(array)
    {
        initializeHeap(array)
        for (i = array.length -1; i>0; i--)
        {
            swap(array, 0, i)
            heapify(array, 0, i-1)
        }
			  return array
    }



function swap(array, i ,j )
{	
let temp = array[i]
array[i] = array[j]
array[j] = temp
}
// Initialization: heapify from the bottom parent all the way to top
function initializeHeap(array) {
    let firstParentIndex = Math.floor((array.length - 2) / 2)
    console.log(firstParentIndex)

    for (i = firstParentIndex; i >=0; i--) {
        heapify(array, i, array.length - 1)
    }
}
// Heapify: find the right place all the way to bottom
function heapify(array, index, maxIndex) {


    //  if they have child? have left child means have child
        while (2 * index + 1 <= maxIndex ) {

        leftChildIndex = 2 * index + 1;
        rightChildIndex = 2 * index + 2 <= maxIndex ? 2 * index + 2: null 
        // 4 cases: only have leftchild and big, have rightchild left is big, have rightchild right is big, other situations we need to stop
        if (rightChildIndex === null && array[leftChildIndex] > array[index]) {swap(array, leftChildIndex, index); index = leftChildIndex} 
        else if (rightChildIndex !== null && array[leftChildIndex] >= array[rightChildIndex] && array[leftChildIndex] > array[index]) {swap(array, leftChildIndex, index); index = leftChildIndex}
        else if (rightChildIndex !== null && array[rightChildIndex] >= array[leftChildIndex] && array[rightChildIndex] > array[index]) {swap(array, rightChildIndex, index); index = rightChildIndex}
        else {break;}

    }
}


// Do not edit the line below.
exports.heapSort = heapSort;
