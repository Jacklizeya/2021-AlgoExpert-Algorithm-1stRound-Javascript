function detectArbitrage(exchangeRates) {
  // Write your code here.
	let dimension = exchangeRates.length
	let array = [...Array(dimension).keys()]
	let result = false
	array.forEach(index => exchange(index, 1, index, "start"))
	return result

	function exchange(initialCurrency, localCurrencyNumber, localCurrency, status) {
		if (result === true) {return}
		if (localCurrency === initialCurrency && status !== "start") {
			console.log("gettingback", localCurrencyNumber)
			if (localCurrencyNumber > 1) {result = true;}
			return
			}
		// if you can find a good path in before, no point to try it here, just go to original currency
		array.forEach(possibleCurrency => {
			if (possibleCurrency > localCurrency || possibleCurrency === initialCurrency) {
				console.log("from local Currency", localCurrency,  "to possibleCurrecy", possibleCurrency)
				exchange(initialCurrency, localCurrencyNumber * exchangeRates[localCurrency][possibleCurrency], possibleCurrency, "going")
			}
		})	
		
		
	}	
}

// Do not edit the line below.
exports.detectArbitrage = detectArbitrage;
