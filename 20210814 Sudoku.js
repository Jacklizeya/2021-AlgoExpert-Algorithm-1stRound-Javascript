// a brute force way to solve sudoku
function findSurroundings(i, j, board) {
    let sameRow = []
    let sameCol = []
    let subGrids = []

    sameRow = [...board[i]]
    for (let col = 0 ; col < 9; col++) {
        sameCol.push(board[i][col])
    }

    let subGridsRow = Math.floor(i / 3) * 3
    let subGridsCol = Math.floor(j / 3) * 3

    for (let s = subGridsRow; s < subGridsRow + 3; s++)
        {for (let k = subGridsCol; k < subGridsCol + 3; k++) {
            subGrids.push(board[s][k])
        }
        }

    let combined = []
    combined.push(...sameRow)    
    combined.push(...sameCol)    
    combined.push(...subGrids)    
    let combinedWithoutZero = combined.filter(element => element !== 0)
    let possibleOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(element => !combinedWithoutZero.includes(element))
    // console.log(possibleOptions)
    return possibleOptions
}

findSurroundings(0, 2, board)

let locationToVisit = []
for (let i=0; i<9; i++) {
    for (let j=0; j<9; j++) {
        if (board[i][j]) {} else {
            locationToVisit.push([i, j])
        }
    }
}

console.log(locationToVisit)
let result
let status = "not Found"

function traverse(index, board) {
    // console.log("index", index)
    // after it fills the last place, it will do the last run and I will check it here
    if (status === "find") {return}
    if (index === locationToVisit.length) {result = board; status ="found"; return}

    let options = findSurroundings(locationToVisit[index][0], locationToVisit[index][1], board)
    if (options.length === 0) {return}
    options.forEach(option =>
        {let newBoard = JSON.parse(JSON.stringify(board))
         newBoard[locationToVisit[index][0]][locationToVisit[index][1]] = option
         traverse(index + 1, newBoard)
        }
    )
}

traverse(0, board)
console.log(result)
