function cycleInGraph(edges) {
  // Write your code here.
  let containCycle = false

	function exploreNode(node, record = []) {
			console.log(record)
			if (record.includes(node)) {containCycle = true; return}
			if (node === []) {return}

			node.forEach(nextNode => {exploreNode(edges[nextNode], [...record, node])})
	 } 

	 edges.forEach(edge => {exploreNode(edge); if (containCycle === true) {return true} })

	 return (containCycle)
}

// Do not edit the line below.
exports.cycleInGraph = cycleInGraph;
