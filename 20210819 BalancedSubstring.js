// trick or observation based algrotihm


function longestBalancedSubstring(string) {
  // Write your code here.
	let openingIndexStack = [-1]
	let maxLength = 0
	
	// This one is really hard to understand, hard logic behind, more about observation for the trend
	for (i = 0; i < string.length; i++ ) {
			if (string[i] === "(") {
				openingIndexStack.push(i)
			} else {
			  openingIndexStack.pop()	
				if (openingIndexStack.length !== 0) {
					currentLength = i - openingIndexStack[openingIndexStack.length - 1]
					if (currentLength > maxLength) {maxLength = currentLength}
				} else {				
					openingIndexStack.push(i)
				}
			}
			} 
	
	  
	  
	return maxLength
	
}

// Do not edit the line below.
exports.longestBalancedSubstring = longestBalancedSubstring;


// make a drawing like this
// -1 0 1 2 3 4 
//  { ( ( ( ( (
//  ) ) ) ) ) ) 
// 10 9 8 7 6 5
