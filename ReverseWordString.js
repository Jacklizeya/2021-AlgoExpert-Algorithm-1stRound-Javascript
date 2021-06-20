function reverseWordsInString(string) {
  // Write your code here.
  
modifiedString = " " + string
let array = []
let marker = 0

for (i=0; i <= modifiedString.length; i++) {
    if (modifiedString[i] === " " || i === modifiedString.length) {
        let element = modifiedString.substring(marker, i)
        array.unshift(element)
        marker = i
    }
}

console.log(array)
let rawresult = array.join("")
let result = rawresult.substring(1, rawresult.length)

return result
	
}

// Do not edit the line below.
exports.reverseWordsInString = reverseWordsInString;
