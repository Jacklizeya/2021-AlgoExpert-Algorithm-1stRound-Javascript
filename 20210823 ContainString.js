function smallestSubstringContaining(bigString, smallString) {
  // Write your code here.
	function convertToMap(string) {
    let storage = {}
    for (let char of string) {
        if (!storage[char]) {storage[char] = 1} else {storage[char] ++}
    }
    return storage
}

// console.log(convertToMap(bigString))
// console.log(convertToMap(smallString))

function mapSmallerThanMap(smallmap, bigmap) {
    for (let key in smallmap) {
        console.log(key, smallmap[key] , bigmap[key])
        if (!bigmap[key] || smallmap[key] > bigmap[key]) {return false}
    }
    return true
}

// console.log(mapSmallerThanMap(convertToMap(smallString), convertToMap(bigString)))

let result = ""
let minLength = Infinity
for (let i = 0 ; i < bigString.length - smallString.length + 1; i++ ) {
    for (let j = i + smallString.length - 1; j < bigString.length; j++) {
        
        let possibleString = bigString.substring(i, j + 1)
        console.log("possible string", possibleString)
        if (mapSmallerThanMap(convertToMap(smallString), convertToMap(possibleString))) {if (possibleString.length < minLength) {console.log("one qualified", possibleString); minLength = possibleString.length; result = possibleString}}
    }
}
return result
}

// Do not edit the line below.
exports.smallestSubstringContaining = smallestSubstringContaining;
