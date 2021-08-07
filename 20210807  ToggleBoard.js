let board  =[
    ["t", "h", "i", "s", "i", "s", "a"],
    ["s", "i", "m", "p", "l", "e", "x"],
    ["b", "x", "x", "x", "x", "e", "b"],
    ["x", "o", "g", "g", "l", "x", "o"],
    ["x", "x", "x", "D", "T", "r", "a"],
    ["R", "E", "P", "E", "A", "d", "x"],
    ["x", "x", "x", "x", "x", "x", "x"],
    ["N", "O", "T", "R", "E", "-", "P"],
    ["x", "x", "D", "E", "T", "A", "E"]
  ]

let words = ["this", "is", "not", "a", "simple", "boggle", "board", "test", "REPEATED", "NOTRE-PEATED"]
let maxRow = board.length
let maxCol = board[0].length
let result = []
// Question, how can visited track be changed? That is impossible I am using the copies, I donot understand how can this happen
function lookForWord(word) {
    for (i =0 ; i <maxRow; i++) {
        for (j= 0; j< maxCol; j++) {
            if (board[i][j] === word[0]) {findWordResult = digWordAroundPosition(word, i, j); if (findWordResult) {result.push(word); return} else {}}
        }
    }
}

function digWordAroundPosition(word, i, j){

let checkresult = false
//  I want to reset storage here every time to empty, I have to move it to here
let visitTrack = []
for (k =0; k<maxRow; k++) {
    visitTrack.push([])
    for (s=0; s< maxCol; s++) {
        visitTrack[k].push("unknown")
    }
}

let storage  = [...visitTrack]
findWord(word, i, j, [...storage])
return checkresult


function findWord(word, i, j, input = [...visitTrack]) {

    if (word.length === 1 && word === board[i][j]) {checkresult = checkresult || true; return}
    // up direction                                                                                                    // everyone has its own copy of previous path, and generate new path, but does not affect other path
    if (i-1 >= 0 && i-1 < maxRow && j>=0 && j < maxCol && board[i-1][j] === word[1] && input[i-1][j] === "unknown") {let newStorage = [...input]; newStorage[i][j] = "visited"; findWord(word.substring(1), i-1, j, [...newStorage])}
    // down direction
    if (i+1 >= 0 && i+1 < maxRow && j>=0 && j < maxCol && board[i+1][j] === word[1] && input[i+1][j] === "unknown" ) {let newStorage = [...input]; newStorage[i][j] = "visited"; findWord(word.substring(1), i+1, j, [...newStorage])}
    // up right
    if (i-1 >= 0 && i-1 < maxRow && j + 1 >=0 && j +1 < maxCol && board[i-1][j+1] === word[1] && input[i-1][j+1] === "unknown" ) {let newStorage = [...input]; newStorage[i][j] = "visited"; findWord(word.substring(1), i-1, j+1, [...newStorage])}
    // up left
    if (i-1 >= 0 && i-1 < maxRow && j - 1 >=0 && j - 1< maxCol && board[i-1][j-1] === word[1] && input[i-1][j-1] === "unknown" ) {let newStorage = [...input]; newStorage[i][j] = "visited"; findWord(word.substring(1), i-1, j-1, [...newStorage])}
    // left direction
    if (i >= 0 && i < maxRow && j - 1 >=0 && j - 1 < maxCol && board[i][j-1] === word[1] && input[i][j-1] === "unknown") {let newStorage = [...input]; newStorage[i][j] = "visited"; findWord(word.substring(1), i, j-1, [...newStorage])}
    // right direction
    if (i >= 0 && i < maxRow && j +1 >=0 && j +1  < maxCol && board[i][j + 1] === word[1] && input[i][j +1]  === "unknown") {let newStorage = [...input]; newStorage[i][j] = "visited"; findWord(word.substring(1), i, j + 1, [...newStorage])}
    // down right
    if (i+1 >= 0 && i+1 < maxRow && j+1>=0 && j+1 < maxCol && board[i+1][j+1] === word[1] && input[i+1][j+1] === "unknown") {let newStorage = [...input]; newStorage[i][j] = "visited"; findWord(word.substring(1), i+1, j+1, [...newStorage])}
    // down left
    if (i+1 >= 0 && i+1 < maxRow && j-1>=0 && j-1 < maxCol && board[i+1][j-1] === word[1] && input[i+1][j-1] === "unknown") {let newStorage = [...input]; newStorage[i][j] = "visited"; findWord(word.substring(1), i+1, j-1, [...newStorage])}
    // I did not find anything, then no need to do anything as we assume it is false 
}
}

words.forEach(word => {console.log(word);lookForWord(word)})
console.log(result)





