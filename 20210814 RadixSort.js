function radixSort(array) {
  // Write your code here.
	let lengthArray = array.map(element => element.toString().length)
console.log(lengthArray)
console.log(typeof(lengthArray[0]))
let maxDigits = Math.max(...lengthArray)
console.log(maxDigits)
let matrix = []

let organizeByDigits = array.map(element => { 
    let string = element.toString()
    while(string.length < maxDigits) {string = "0" + string}
    let newArray = string.split("").reverse()
    newArrayWithNumbers = newArray.map(element => parseInt(element))
    matrix.push(newArrayWithNumbers)
})

// after reorganizing
// [ 2, 6, 7, 8 ]
// [ 4, 5, 6, 0 ]
// [ 8, 0, 0, 3 ]
// [ 5, 4, 3, 0 ]
// [ 7, 8, 0, 0 ]
// [ 5, 6, 0, 0 ]
// [ 4, 3, 2, 0 ]
// [ 2, 1, 0, 0 ]
// [ 2, 0, 0, 0 ]
console.log(matrix)

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let digit = 1; digit <= maxDigits; digit++) {
    // step one, find the count
    let count =   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (let index =0; index < array.length; index++) {
        count[matrix[index][digit -1]]++
    }
    // console.log("count", count)
    // result will be like this
    // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    // [ 0, 0, 3, 0, 2, 2, 0, 1, 1, 0]

    // find accumulative count
    let endIndex = [count[0] - 1]

    for (let i = 1; i < numbers.length; i++) {
        endIndex[i] = endIndex[i-1] + count[i] 
    }

    // console.log("endIndex", endIndex)

    let startIndex = []
    for (let i = 0; i < numbers.length; i++) {
        startIndex.push(endIndex[i] - count[i] + 1)
    }

    // console.log("startIndex", startIndex)

    let matrixCopy = JSON.parse(JSON.stringify(matrix))
    for (let index =0; index < array.length; index++) {       
        let indicator = matrixCopy[index][digit-1]

        let proposeLocation = startIndex[indicator]
        // console.log("proposed Index", proposeLocation)
        matrix[proposeLocation] = matrixCopy[index]
        startIndex[indicator]++
        // console.log("startIndex", startIndex)
    }
    // console.log(matrix)

}

let finalResult = matrix.map(element => {element.reverse(); let joinedtogether = parseInt(element.join("")); return joinedtogether})
console.log(finalResult)
return finalResult
}

// Do not edit the line below.
exports.radixSort = radixSort;
