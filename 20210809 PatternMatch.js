function patternMatcher(pattern, string) {
  // Write your code here.
let result = []

//  standardize the patter

let standardlized = false
if (pattern[0] === "y") {
		standardlized = true
    let newPattern = ""
    for (let i=0; i< pattern.length; i++) {
        if (pattern[i] === "x") {newPattern += "y"} else {newPattern += "x"}
    }
    pattern = newPattern
}

console.log(pattern)

let patternStorage = {}
for (let i=0; i< pattern.length; i++) {
    if (patternStorage[pattern[i]]) {patternStorage[pattern[i]] ++}
    else {patternStorage[pattern[i]] = 1}
}
// handle case #3 in paragraph 3	
console.log(patternStorage)
if (!patternStorage["y"]) {
   let xLength = string.length/patternStorage["x"]
	 if (xLength % 1 === 0) {
		 
		 if (!standardlized) {return [string.substring(0, xLength), ""]} else {return ["", string.substring(0, xLength),]}
	 }
}


let startPositionOfY = pattern.indexOf("y")
console.log("patternStorage", patternStorage, "startPositionOfY", startPositionOfY)

for (let xLength =1; xLength < Math.floor(string.length / patternStorage["x"]); xLength++) {
    console.log(xLength)
    yLength = (string.length - xLength * patternStorage["x"]) / patternStorage["y"]
    if (yLength % 1 === 0) {
        xElement = string.substring(0, xLength)
        yElement = string.substring(0 + startPositionOfY * xLength, 0 + startPositionOfY * xLength + yLength )
        console.log(xElement, yElement)
        let proposedString = ""
        for (let i=0; i< pattern.length; i++) {
            if (pattern[i] === "x") {proposedString += xElement} else {proposedString += yElement}
            console.log("proposedString", proposedString)
        }
        if (proposedString === string) {result.push(xElement, yElement)}
    }
}


console.log(result)
// handle case #1, 2 in paragraph 3	
if (result.length === 0) {return []} else {
	if (standardlized) {return [result[1], result[0]]} else {return result}
	}
}

// Do not edit the line below.
exports.patternMatcher = patternMatcher;
