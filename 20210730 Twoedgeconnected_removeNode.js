// Now I am doubting on of the edge case, emailed AlgoExpert and looking for reply
//   "edges": [
//     [1, 2, 3, 5],
//     [0, 2],
//     [0, 1],
//     [0, 4, 5],
//     [3, 5],
//     [3, 4, 0]
//   ]
// 
// I donot think this is a double - edge - graph



function twoEdgeConnectedGraph(edges) {
  // Write your code here.
	let result = true
	
	// For the edge cases
	if (edges.length === 0) {return true}
	if (edges.every(element => element.length === 0)) {if (edges.length == 1) {return true} else {return false}}
	
	function removeVertice(removeIndex) {
    let newEdges = [...edges]
    newEdges.splice(removeIndex, 1, [])
    let newEdgesWithoutRemoveIndex = newEdges.map(element => element.filter(subElement => subElement !== removeIndex))
    console.log(newEdgesWithoutRemoveIndex)
    return newEdgesWithoutRemoveIndex
} 


function BFStraverse(graph, queue, positionInQueue) {
    console.log("positioninQueue and queue", queue, positionInQueue)
    if (queue.length === graph.length - 1 ) {return true}
    if (positionInQueue > queue.length - 1) {return false}
	
    if (graph[queue[positionInQueue]].length !== 0) {
        graph[queue[positionInQueue]].forEach(element => {
            if (! queue.includes(element)) {queue.push(element)}
        })}
	
	  return BFStraverse(graph, queue, positionInQueue + 1)
}


edges.forEach((edge, index)=>{ let newArray = removeVertice(index); if (index === 0) {result = result && BFStraverse(newArray, newArray[1], 0)} 
															else {result = result && BFStraverse(newArray, newArray[0], 0)}})
  
	
	console.log(result)
	return result
}

// Do not edit the line below.
exports.twoEdgeConnectedGraph = twoEdgeConnectedGraph;

// Solution on September 24, 2021

function twoEdgeConnectedGraph(edges) {
  // Write your code here.
	let counts = edges.length
	
	if (edges.every(edge => edge.length === 0)) { if (edges.length === 1 || edges.length === 0) {return true} else {return false}}
  if (!(edges.every(edge => edge.length > 1))) {return false}

	
	// Brute force solution
	// get all the edges
	let allEdges = []
	for (let i=0 ; i<edges.length; i++) {
		for (let j=0; j < edges[i].length; j++) {
			allEdges.push([i, edges[i][j]])
		}
	}
	


	// create the new adjacent list
	let result = true
	// for Each can not really return anything
	allEdges.forEach(edge => {if (!tryToRemoveOneEdge(edge)) {result = result && false}})
	// verify true or false
  return result;
	
	function tryToRemoveOneEdge(edge) {
		let newAllEdges = JSON.parse(JSON.stringify(edges))
		let index1 = edge[0]
		let index2 = edge[1]
		newAllEdges[index1] = newAllEdges[index1].filter(element => element!== index2)
		newAllEdges[index2] = newAllEdges[index2].filter(element => element!== index1)
		console.log("BFS", BFS(newAllEdges))
		return BFS(newAllEdges)
	}
		
	function BFS(newAllEdges) {
		console.log("newAllEdges", newAllEdges)
		let queue = [0]
		let i = 0
		while (i < queue.length) {
			let currentLocation = queue[i]
			let nextOnes = newAllEdges[currentLocation]
			nextOnes.forEach(nextOne => {if (!queue.includes(nextOne)) {queue.push(nextOne)}})
			i++
		}
		console.log("queue and counts", queue, counts)
		if (counts === queue.length) {return true} else {return false}
	}
	
}

// Do not edit the line below.
exports.twoEdgeConnectedGraph = twoEdgeConnectedGraph;

