function shiftedBinarySearch(array, target) {
  // Write your code here.
	
if (!array.includes(target)) {return -1}
	
let result 
let status = "notfound"

function ShiftBS(left, right) {
    // console.log(left, right)
    if (status === "found") {return}
    if (left > right) {return}
    if (left === right) {if (array[left] === target) {result = left; status = "found"}; return}

    let middle = Math.floor((left + right)/2)
    if (array[middle] === target) {result = middle; status = "found"; return}
    else if (array[middle] < target) {
        if (array[left] >= target) {ShiftBS(left, middle - 1)}
        if (array[right] <= target) {ShiftBS(middle + 1, right)}
    }
    else {array[middle] > target} {
        if (array[left] <= target) {ShiftBS(left, middle - 1)}
        if (array[right] >= target) {ShiftBS(middle + 1, right)}
    }
        
}

ShiftBS(0, array.length - 1)
console.log(result, status)
return result
	
	
	
	
}

// Do not edit the line below.
exports.shiftedBinarySearch = shiftedBinarySearch;
