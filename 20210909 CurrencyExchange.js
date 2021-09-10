// for every line, if it just start, visit all others
// else only visit those ones bigger than it 
// from math point 1 * 1 

function detectArbitrage(exchangeRates) {
  // Write your code here.
	let exchangeRatesCopy = JSON.parse(JSON.stringify(exchangeRates))
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
				if (status === "start") {if (possibleCurrency !== initialCurrency) {
				console.log("from local Currency", localCurrency,  "to possibleCurrecy", possibleCurrency)
				exchange(initialCurrency, localCurrencyNumber * exchangeRatesCopy[localCurrency][possibleCurrency], possibleCurrency, "going")
			}}
				else if (status !== "start") {
					if (possibleCurrency > localCurrency) {
				console.log("from local Currency", localCurrency,  "to possibleCurrecy", possibleCurrency)
				exchange(initialCurrency, localCurrencyNumber * exchangeRatesCopy[localCurrency][possibleCurrency], possibleCurrency, "going")
					}
				}
		})	
		
		
	}	
}

// Do not edit the line below.
exports.detectArbitrage = detectArbitrage;


