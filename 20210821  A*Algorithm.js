// something was only able to deal with the small test set, failed for large case 
// My original Solution

function aStarAlgorithm(startRow, startCol, endRow, endCol, graph) {
  // Write your code here.
  let visit = []
let maxRow = graph.length
let maxCol = graph[0].length

for (row = 0; row < maxRow; row++) {
    visit.push([])
    for (col = 0; col < maxCol; col++) { 
        visit[row].push("nonvisited")
    } 
}

// console.log(visit)

let index = 0
let queue = [[[startRow, startCol]]]
// console.log("queue initial", queue)
let result = []

while (index < queue.length) {
    // console.log("round", index, queue)
    let currentRow = queue[index][queue[index].length - 1][0]
    let currentCol = queue[index][queue[index].length - 1][1]
    // console.log("currentRow, currentCol", currentRow, currentCol)
    // I found it
    if (currentRow === endRow && currentCol === endCol) {result = queue[index]; break;} else {visit[currentRow][currentCol] = "visited"}

    
    // top
    if (currentRow - 1 >=0 && currentRow - 1 < maxRow && currentCol >=0 && currentCol < maxCol && graph[currentRow - 1][currentCol] !== 1 && visit[currentRow - 1][currentCol] !== "visited") {
        let futurePath = JSON.parse(JSON.stringify([...queue[index]]))
        futurePath.push([currentRow - 1, currentCol])
        // console.log("line 42")
        queue.push(futurePath)
    }
    // right; currentRow, currentCol + 1 
    if (currentRow >=0 && currentRow < maxRow && currentCol + 1 >=0 && currentCol + 1 < maxCol && graph[currentRow][currentCol + 1] !== 1 && visit[currentRow][currentCol + 1] !== "visited") {
        let futurePath = JSON.parse(JSON.stringify([...queue[index]]))
        futurePath.push([currentRow, currentCol + 1])
        queue.push(futurePath)
    }
    // down
    if (currentRow + 1 >=0 && currentRow + 1 < maxRow && currentCol >=0 && currentCol < maxCol && graph[currentRow + 1][currentCol] !== 1 && visit[currentRow + 1][currentCol] !== "visited") {
        let futurePath = JSON.parse(JSON.stringify([...queue[index]]))
        futurePath.push([currentRow + 1, currentCol])
        queue.push(futurePath)
    }
    // left
    if (currentRow >=0 && currentRow < maxRow && currentCol - 1 >=0 && currentCol - 1 < maxCol && graph[currentRow][currentCol - 1] !== 1 && visit[currentRow][currentCol - 1] !== "visited") {
        let futurePath = JSON.parse(JSON.stringify([...queue[index]]))
        futurePath.push([currentRow, currentCol - 1])
        queue.push(futurePath)
    }
    index++
}

// console.log(result)
return result
	
}

// Do not edit the line below.
exports.aStarAlgorithm = aStarAlgorithm;


//  For queue, delete something that is not working. 
//  The goingtoVisit nodes will be marked in the visit matrix, so we are not going to double visit it

function aStarAlgorithm(startRow, startCol, endRow, endCol, graph) {
  // Write your code here.
let visit = []
let maxRow = graph.length
let maxCol = graph[0].length

for (row = 0; row < maxRow; row++) {
    visit.push([])
    for (col = 0; col < maxCol; col++) { 
        visit[row].push("nonvisited")
    } 
}

// // console.log(visit)

// let index = 0
let pathQueue = [[[startRow, startCol]]]
// console.log("pathQueue initial", pathQueue)
let result = []

while (pathQueue.length !== 0) {
    // console.log("round", pathQueue)
    let currentRow = pathQueue[0][pathQueue[0].length - 1][0]
    let currentCol = pathQueue[0][pathQueue[0].length - 1][1]
    console.log("currentRow, currentCol", currentRow, currentCol)
    // I found it
    if (currentRow === endRow && currentCol === endCol) {result = pathQueue[0]; break;} else {visit[currentRow][currentCol] = "visited"; }
   
    // top
    if (currentRow - 1 >=0 && currentRow - 1 < maxRow && currentCol >=0 && currentCol < maxCol && graph[currentRow - 1][currentCol] !== 1 && visit[currentRow - 1][currentCol] === "nonvisited") {
        let futurePath = JSON.parse(JSON.stringify(pathQueue[0]))
        futurePath.push([currentRow - 1, currentCol])
        // console.log("line 42")
        pathQueue.push(futurePath)
        visit[currentRow - 1][currentCol] = "toBeVisited"
    }
    // right; currentRow, currentCol + 1 
    if (currentRow >=0 && currentRow < maxRow && currentCol + 1 >=0 && currentCol + 1 < maxCol && graph[currentRow][currentCol + 1] !== 1 && visit[currentRow][currentCol + 1] === "nonvisited") {
        let futurePath = JSON.parse(JSON.stringify(pathQueue[0]))
        futurePath.push([currentRow, currentCol + 1])
        pathQueue.push(futurePath)
        visit[currentRow][currentCol + 1] = "toBeVisited"
    }
    // down
    if (currentRow + 1 >=0 && currentRow + 1 < maxRow && currentCol >=0 && currentCol < maxCol && graph[currentRow + 1][currentCol] !== 1 && visit[currentRow + 1][currentCol] === "nonvisited") {
        let futurePath = JSON.parse(JSON.stringify(pathQueue[0]))
        futurePath.push([currentRow + 1, currentCol])
        pathQueue.push(futurePath)
        visit[currentRow + 1][currentCol] = "toBeVisited"
    }
    // left
    if (currentRow >=0 && currentRow < maxRow && currentCol - 1 >=0 && currentCol - 1 < maxCol && graph[currentRow][currentCol - 1] !== 1 && visit[currentRow][currentCol - 1] === "nonvisited") {
        let futurePath = JSON.parse(JSON.stringify(pathQueue[0]))
        futurePath.push([currentRow, currentCol - 1])
        pathQueue.push(futurePath)
        visit[currentRow][currentCol - 1] = "toBeVisited"
    }

    pathQueue.shift()
}

console.log(result)
return result
}
// Do not edit the line below.
exports.aStarAlgorithm = aStarAlgorithm;




