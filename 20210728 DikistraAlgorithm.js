// Use queue for BST
// Store visited and cumulative value
// cumulative effect

function dijkstrasAlgorithm(start, edges) {
  // Write your code here.
	
let weightstorage = edges.map((element, index) => {if (index === start) {return 0} else {return Infinity}})
let queue = [start]
let visited = {}

function explore(indexInQueue) {
    // console.log("index in queue", indexInQueue, queue)

    if (indexInQueue >= edges.length) {return}
    let position = queue[indexInQueue]
    let nextOptions = edges[position]
    console.log("next options", nextOptions)
    if (nextOptions && nextOptions.length !== 0) {
        nextOptions.forEach( option => {
        // console.log("weight storage", weightstorage)
        // console.log("going to explore edge", position, option[0])    
        // console.log(weightstorage[position] + option[1] < weightstorage[option[0]])
        // console.log(weightstorage[position] + option[1])
        // console.log(weightstorage[option[0]])
        weightstorage[option[0]] = (weightstorage[position] + option[1] < weightstorage[option[0]])? (weightstorage[position] + option[1]): (weightstorage[option[0]]); 
        if (!queue.includes(option[0])) {queue.push(option[0])}})
    }
    visited[position] = "visited"
    explore(indexInQueue + 1)
}

explore(0)
console.log(weightstorage)
let result = weightstorage.map(element => {if (element === Infinity) {return -1} else {return element}})
console.log(result)
return result
}

// Do not edit the line below.
exports.dijkstrasAlgorithm = dijkstrasAlgorithm;
