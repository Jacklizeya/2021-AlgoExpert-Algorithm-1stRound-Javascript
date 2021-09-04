// Turn this into a 2D map, then do recusive call

function palindromePartitioningMinCuts(string) {
  // Write your code here.
	let matrix = []
	let storage = {}
	for (let i = 0; i < string.length; i++) {
		storage[i] = []
		for (let j = 0; j < string.length; j++) {
			if (isPalindrome(i, j)) {storage[i].push(j)}
		}
	}	
	console.log(storage)
	
	let minimum = Infinity
	travel(0)
	console.log(minimum)
	
	function travel(startIndex, cut = 0) {
		console.log("recursion", startIndex, cut, storage[startIndex])
		// if (startIndex >= string.length - 1) {console.log("here", cut, minimum, cut < minimum); if (cut  < minimum) {minimum = cut } ; return}
		storage[startIndex].forEach(endIndex => 
																{if (endIndex === string.length - 1) {if (cut  < minimum) {minimum = cut}}
																else {travel(endIndex + 1, cut + 1)}})
	}
	
	if (minimum === Infinity) {return false} else {return minimum  }
	
	function isPalindrome(i, j) {
		if (i > j) {return false}
		if (i === j) {return true}
		while (i < j) {
			if (string[i] === string[j]) {i++; j--} else {return false}
		}
		return true
	}
	
}

// Do not edit the line below.
exports.palindromePartitioningMinCuts = palindromePartitioningMinCuts;
