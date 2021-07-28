function maximumSumSubmatrix(matrix, size) {
  // Write your code here.

let maxSum = -Infinity

let maxCol = matrix[0].length - 1
let maxRow = matrix.length - 1

for (i=0; i <= maxRow -   size + 1; i++) {
    for (j =0; j<=maxCol  - size + 1; j++) {
			
        let boxSum = calculateSum(i, j)
        if (boxSum > maxSum) {maxSum = boxSum}
    }
}

function calculateSum(x, y) {
    let sum = 0
    for (k = x; k <= x + size-1; k++) {
        let qualifidArray = matrix[k].slice(y, y + size)
        let sumOfThisRow = qualifidArray.reduce((accumulator, element)=>{return accumulator + element}, 0)
        sum += sumOfThisRow
    }
    console.log(sum)
    return sum
}

calculateSum(0, 0)
return(maxSum)
}

// Do not edit the line below.
exports.maximumSumSubmatrix = maximumSumSubmatrix;
