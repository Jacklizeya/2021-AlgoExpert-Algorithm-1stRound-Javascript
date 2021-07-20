function longestCommonSubsequence(str1, str2) {
  // Write your code here.

str1 =  " " + str1
str2 =  " " + str2
console.log("addspace", str1.length, str2.length)
console.log(str1[1], str2[1])

let matrix = []
for (row = 0; row < str1.length; row++) {
    matrix.push([])
    for (col = 0; col < str2.length; col++) {
        {matrix[row].push(" ")}
    }
}

for (row = 1; row < str1.length; row++) {
    for (col = 1; col < str2.length; col++) {
        if (str1[row] === str2[col]) {console.log("qualified", matrix[row -1 ][col -1].length); matrix[row][col] = matrix[row -1 ][col -1] + str1[row]}
        else if (matrix[row-1][col].length > matrix[row][col-1].length) {matrix[row][col] = matrix[row-1][col]}
        else {matrix[row][col] = matrix[row][col-1]}
    }
}

let result = matrix[str1.length - 1][str2.length -1]
console.log("result", result)
let resultArray = result.split("")
resultArray.shift()
return(resultArray)
}

// Do not edit the line below.
exports.longestCommonSubsequence = longestCommonSubsequence;



// Another hard way of doing things 
