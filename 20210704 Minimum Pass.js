function minimumPassesOfMatrix(matrix) {
  // Write your code here.
let isPastEdgeorZero = [] 
let row = matrix.length;
let col = matrix[0].length
let edge = []

for (i = 0; i < matrix.length; i++) {
    isPastEdgeorZero.push([])
    for (j = 0; j < matrix[0].length; j++)
        {   
            if (matrix[i][j] > 0) {edge.push([i, j])}
            if (matrix[i][j] >= 0) {isPastEdgeorZero[i].push("yes")} else {isPastEdgeorZero[i].push("no")}
        }
}

let count = 0
// This is to let it expand
function exploreBoundary(inputArray) {
    let initialEdgeLength = inputArray.length 
    if (initialEdgeLength === 0) {return}
    for (k = 0; k < initialEdgeLength; k++) {

        let x = inputArray[k][0]
        let y = inputArray[k][1]
        if (  (x-1 >=0 && x-1 < row) && (y >=0 && y < col) && matrix[x-1][y] < 0 && isPastEdgeorZero[x-1][y] !== "yes") {matrix[x-1][y] = matrix[x-1][y] * -1; isPastEdgeorZero[x-1][y] = "yes"; inputArray.push([x-1, y])}
        if (  (x+1 >=0 && x+1 < row) && (y >=0 && y < col) && matrix[x+1][y] < 0 && isPastEdgeorZero[x+1][y] !== "yes") {matrix[x+1][y] = matrix[x+1][y] * -1; isPastEdgeorZero[x+1][y] = "yes"; inputArray.push([x+1, y])}
        if (  (x >=0 && x < row) && (y-1 >=0 && y-1 < col) && matrix[x][y-1] < 0 && isPastEdgeorZero[x][y-1] !== "yes") {matrix[x][y-1] = matrix[x][y-1] * -1; isPastEdgeorZero[x][y-1] = "yes"; inputArray.push([x, y-1])}
        if (  (x >=0 && x < row) && (y+1 >=0 && y+1 < col) && matrix[x][y+1] < 0 && isPastEdgeorZero[x][y+1] !== "yes") {matrix[x][y+1] = matrix[x][y+1] * -1; isPastEdgeorZero[x][y+1] = "yes"; inputArray.push([x, y+1])} 
    }
    console.log(inputArray)
    let newEdge = inputArray.slice(initialEdgeLength, inputArray.length)
    count++
    exploreBoundary(newEdge)
    }

exploreBoundary([...edge])
// This is to check everything after expanding

function check() {
    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[0].length; j++)
            {
                if (matrix[i][j] < 0) {return -1}
            }
    }
    return count - 1
}

return (check())
}

// Do not edit the line below.
exports.minimumPassesOfMatrix = minimumPassesOfMatrix;
