function maxProfitWithKTransactions(prices, k) {
  // Write your code here.
	if (prices.length === 0) {return 0}
	
	let matrix = []
	for (let row =0; row <= k; row++) {matrix.push([0])}
	for (let col =0 ; col < prices.length - 1 ; col++) {matrix[0].push(0)}
	console.log(matrix)
	
	for (let row = 1; row <= k; row++) {
		for (let col = 1 ; col < prices.length; col++) {
			let doNotUseThisOpportunity = matrix[row][col - 1]
			let useThisOpportunity = matrix[row - 1].slice(0, col).map((oneTransactionLess, index) => oneTransactionLess + (prices[col] - prices[index]))
			console.log("row", row, "col", col, "donotuse", doNotUseThisOpportunity, "useit", ...useThisOpportunity)
			matrix[row].push(Math.max(doNotUseThisOpportunity, ...useThisOpportunity))
		}
	}
	console.log(matrix)
	return matrix[k][prices.length - 1]
	
	
}

// Do not edit the line below.
exports.maxProfitWithKTransactions = maxProfitWithKTransactions;
