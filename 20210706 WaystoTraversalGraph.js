function numberOfWaysToTraverseGraph(width, height) {
  // Write your code here.
  let queue = [[0, 0]]
let count = 0
function expand() {
    
    if (queue.length === 0) {return}
    let currentElement = queue[0]
    let currentRow = currentElement[0]
    let currentCol = currentElement[1]

    if (currentRow === height-1 && currentCol === width-1) { count++;}
    if ( currentRow + 1 < height && currentCol < width) {queue.push([currentRow + 1, currentCol])}
    if ( currentRow  < height && currentCol + 1 < width) {queue.push([currentRow, currentCol + 1])}
    queue.shift()
    
    expand()
}

expand()
console.log(count)
return (count)
}

// Do not edit the line below.
exports.numberOfWaysToTraverseGraph = numberOfWaysToTraverseGraph;
