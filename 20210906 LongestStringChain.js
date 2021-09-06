function longestStringChain(strings) {
  // Write your code here.
	if (strings.length == 0) {return []}
	
	let myChildren = {}
  for (let i = 0; i < strings.length; i++) {
		myChildren[strings[i]] = []
		for (let j = 0; j < strings.length ; j++) {
			
			if (contains(strings[i], strings[j]) && strings[i] !== strings[j]) {myChildren[strings[i]].push(strings[j])}
			console.log(strings[i], strings[j], myChildren[strings[i]])
		}
	}
	console.log(myChildren)
	
	
	let longestPath = {}
	let result = []
	let longest = 1 
	for (key in myChildren) {
		findLongestPath(key)
	}
	console.log(longest, result)
	if (longest !== 1) { return result} else {return []}
	
function findLongestPath(node, count = 1, path = [node]) {
	if (myChildren[node].length === 0) {
		if (count > longest) {longest = count; result = [...path]}
	}
	else { myChildren[node].forEach(child => {path.push(child); findLongestPath(child, count + 1, path); path.pop()})}
}	
  
function contains(string1, string2) {
	if (string1.length - string2.length !== 1) {return false}
	else {
		 let i = 0
		 while (string1[i] === string2[i]) {
			 i++
		 }
		 let newString1 = string1.substring(0, i) + string1.substring(i + 1, string1.length)
		 if (newString1 === string2) {return true} else {return false}
	}
}	
	
	
}

// Do not edit the line below.
exports.longestStringChain = longestStringChain;
