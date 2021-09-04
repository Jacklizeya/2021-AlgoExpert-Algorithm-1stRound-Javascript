function squareOfZeroes(matrix) {
  // Write your code here.
	let dimension = matrix.length
	let rowStorage = {}
	let colStorage = {}
	for (let i = 0; i < dimension; i++) {
		rowStorage[i] = 0;
		colStorage[i] = 0
	}
	
	for (let row = 0 ; row < dimension; row++) {
		for (let col = 0; col < dimension; col++) {
			if (matrix[row][col] === 0) {
				rowStorage[row]++
				colStorage[col]++
			}
		} 
	}
	
  let qualifiedRow = []
	let qualifiedCol = []
	for (let key in rowStorage) {if (rowStorage[key] >=2) {qualifiedRow.push(Number(key))}}
	for (let key in colStorage) {if (colStorage[key] >=2) {qualifiedCol.push(Number(key))}}
	console.log("qualifiedRow", "qualifiedCol", qualifiedRow, qualifiedCol)
	if (qualifiedRow.length < 2 || qualifiedCol.length < 2) {return false}
	// have some possibility here, combination
	for (let i = 0; i < qualifiedRow.length - 1; i++) {
		for (let j = i + 1; j < qualifiedRow.length; j++) {
			for (let k = 0; k < qualifiedCol.length - 1 ; k++) {
				if (checkAllZeros(qualifiedRow[i], qualifiedRow[j], qualifiedCol[k], qualifiedCol[k + j - i])) {return true}
			}
		}
	}

	return false
		
	function checkAllZeros(row1, row2, col1, col2) {
		console.log(row1, row2, col1, col2)
		for (let j = col1; j <= col2; j++) {if (matrix[row1][j] !== 0) {return false}}
		for (let i = row1 + 1; i <= row2 - 1; i++) {if (matrix[i][col2] !== 0) {return false}}
		for (let j = col2; j >= col1; j--) {console.log(matrix[row2][j]); if (matrix[row2][j] !== 0) {return false}}
		for (let i = row2 - 1; i >= row1; i--) {if (matrix[i][col1] !== 0) {return false}}
		console.log("true")
		return true
	}
}
	
	

// Do not edit the line below.
exports.squareOfZeroes = squareOfZeroes;
