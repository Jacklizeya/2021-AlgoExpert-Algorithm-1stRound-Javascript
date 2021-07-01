function searchInSortedMatrix(matrix, target) {
  // Write your code here.
	let rowLength = matrix.length
    let colLength = matrix[0].length
    let rowLimit = rowLength
    let colLimit = colLength
    let output = []
    for (i = 0 ; i < rowLimit; i++) {
        for (j = 0; j < colLimit; j++ ) {
            if (matrix[i][j] === target ) {output.push(i); output.push(j); return output}
            if (matrix[i][j] > target) {colLimit = j; break;}
        }
    }
	return [-1, -1]
}

// Do not edit the line below.
exports.searchInSortedMatrix = searchInSortedMatrix;
