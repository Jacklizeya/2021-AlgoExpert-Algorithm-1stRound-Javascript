function fourNumberSum(array, targetSum) {
  // Write your code here.

let result = []


function findSum(targetSum, array, leftOption, accumulator) {


    if (array.length === 0 || leftOption === 0 || array.length < leftOption) { console.log("time to return"); if (leftOption ===0 && targetSum === 0) {result.push(accumulator); return} else {return}}
    // take the last one
    let arraycopy = [...array]
    arraycopy.pop()
    let accumulatorcopy = [...accumulator]
    accumulatorcopy.push(array[array.length - 1])
    console.log("accumulatorcopy", accumulatorcopy)
    findSum(targetSum - array[array.length - 1], arraycopy, leftOption - 1, accumulatorcopy)
    // do not take the last one
    findSum(targetSum, arraycopy, leftOption, accumulator)

}

findSum(targetSum, array, 4, [])

return (result)
	
	
	
	
	
}

// Do not edit the line below.
exports.fourNumberSum = fourNumberSum;
