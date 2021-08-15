function searchForRange(array, target) {
  // Write your code here.
if (!array.includes(target)) {return [-1, -1]}	
	
let length = array.length
let min = Infinity
let max = -Infinity
console.log(array.length)
console.log(Math.floor((array.length - 1)/2))

function BS(leftIndex, rightIndex) {

    // there is nothing inside
    if (leftIndex > rightIndex) {return}

    let middleIndex = Math.floor((leftIndex + rightIndex)/2)
    // there is only one element inside
    if (leftIndex === rightIndex) {
        if (array[middleIndex] === target) {
            if (middleIndex < min) {min = middleIndex}
            if (middleIndex > max) {max = middleIndex}
        } 
        return
    }
    // there is 2 or more elements inside
    if (array[middleIndex] === target) {
        if (middleIndex < min) {min = middleIndex}
        if (middleIndex > max) {max = middleIndex}
        BS(leftIndex, middleIndex - 1)
        BS(middleIndex+1, rightIndex) 
    }
    else if (array[middleIndex] < target) {
        BS(middleIndex + 1, rightIndex)
    }
    else { 
        BS(leftIndex, middleIndex - 1)
    }
}

BS(0, array.length - 1)
console.log(min, max)
return ([min, max])
}

// Do not edit the line below.
exports.searchForRange = searchForRange;
