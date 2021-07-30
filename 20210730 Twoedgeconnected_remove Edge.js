function twoEdgeConnectedGraph(edges) {
  // Write your code here.
	let result = true
	
	// For the edge cases
	if (edges.length === 0) {return true}
	if (edges.every(element => element.length === 0)) {if (edges.length == 1) {return true} else {return false}}
	
	
	let bridges = []

		for (i =0; i < edges.length; i++) {
				subBridge = edges[i].map(element => [i, element])
				bridges.push(...subBridge)
		}
		console.log(bridges)
		console.log(bridges.length)

		function removeEdge(bridge) {
				let newEdges = [...edges]
				targetRemove1 = bridge
				targetRemove2 = [targetRemove1[1], targetRemove1[0]]
				newEdges[targetRemove1[0]] = newEdges[targetRemove1[0]].filter(element => element !== targetRemove1[1])
				newEdges[targetRemove2[0]] = newEdges[targetRemove2[0]].filter(element => element !== targetRemove2[1])
				console.log("newEdgewithoutthat index", newEdges)
				return newEdges
		} 

		function BFStraverse(graph, queue, positionInQueue) {
				console.log("positioninQueue and queue", queue, positionInQueue)
				// If I can reach all of them, I am happy
				if (queue.length === graph.length) {return true}

    // I am at the end of the queue, queue is not able to reach everything and I am run out of option. For Example queue = [0, 1, 2], position === 3, total is 6
    if (positionInQueue > queue.length - 1) {return false}

				if (graph[queue[positionInQueue]].length !== 0) {
						graph[queue[positionInQueue]].forEach(element => {
								if (! queue.includes(element)) {queue.push(element)}
						})}
			// I am going to move to next one in the queue
			return BFStraverse(graph, queue, positionInQueue + 1)
		}

		for (i=0; i<bridges.length; i++) {
				bridge = bridges[i]
				let newEdges = removeEdge(bridge)
				// can not contain empty stuff
				if (newEdges.some(element => element.length === 0)) {return false}
				let subResult = BFStraverse(newEdges, [0], 0)
				if (subResult === false) {return false}
		}

		console.log(result)
		return result
}

// Do not edit the line below.
exports.twoEdgeConnectedGraph = twoEdgeConnectedGraph;
