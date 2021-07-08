function levenshteinDistance(str1, str2) {


let matrix = []

for (row = 0; row <= str1.length; row++) {
    console.log("row", row)
    matrix.push([])
    for (col = 0; col <= str2.length; col++) {
        console.log("col", col)
        if (row === 0) {console.log(row, col, "one push"); matrix[row].push(col)}
        else if (row !==0 && col === 0 ) {matrix[row].push(row)}
        else {matrix[row].push("unknown")}
    }
}

console.log(matrix)

for (i = 1; i <= str1.length; i++) {
    for (j = 1; j <= str2.length; j++) {
        if (str1[i-1] === str2[j-1]) {matrix[i][j] = matrix[i-1][j-1]} else {
            matrix[i][j] = Math.min(matrix[i-1][j], matrix[i][j-1], matrix[i-1][j-1]) + 1
        }
    }
}

console.log(matrix)

return (matrix[str1.length][str2.length])
}

// Do not edit the line below.
exports.levenshteinDistance = levenshteinDistance;
