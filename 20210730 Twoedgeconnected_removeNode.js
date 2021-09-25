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
		// let newAllEdges = JSON.parse(JSON.stringify(edges))
		let index1 = edge[0]
		let index2 = edge[1]
		// newAllEdges[index1] = newAllEdges[index1].filter(element => element!== index2)
		// newAllEdges[index2] = newAllEdges[index2].filter(element => element!== index1)
		// console.log("BFS", BFS(newAllEdges))
		
		for (let i = 0; i < edges[index1].length; i++) {
			if (edges[index1][i] === index2) {edges[index1][i] = -1}
		}
		
		for (let i = 0; i < edges[index1].length; i++) {
			if (edges[index2][i] === index1) {edges[index2][i] = -1}
		}
		
		
		let result = BFS(edges)
		
		for (let i = 0; i < edges[index1].length; i++) {
			if (edges[index1][i] === -1) {edges[index1][i] = index2}
		}
		
		for (let i = 0; i < edges[index1].length; i++) {
			if (edges[index2][i] === -1) {edges[index2][i] = index1}
		}
		
		
		
		return result
	}
		
	function BFS(newAllEdges) {
		console.log("newAllEdges", newAllEdges)
		let queue = [0]
		let visited = {}
		while (queue.length > 0) {
			let currentLocation = queue.shift()
			visited[currentLocation] = visited
			let nextOnes = newAllEdges[currentLocation]
			nextOnes.forEach(nextOne => {if (!queue.includes(nextOne) && !(nextOne in visited) && (nextOne !== -1)) {queue.push(nextOne)}})
		}
		console.log("queue and counts", queue, counts)
		if (counts === Object.keys(visited).length) {return true} else {return false}
	}
	
}

// Do not edit the line below.
exports.twoEdgeConnectedGraph = twoEdgeConnectedGraph;
