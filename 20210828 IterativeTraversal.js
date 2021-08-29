function iterativeInOrderTraversal(tree, callback) {
  // Write your code here.
	// judge what is going on by directions
	let currentNode = tree
	currentNode.parent = null
	let previousNode = null
	
	while (currentNode !== null) {
		console.log("line 8 current @", currentNode.value)
		// explore downwards
		if ( previousNode === null || currentNode.parent === previousNode) {
			console.log("going downwards")
			if (currentNode.left === null && currentNode.right === null) {callback(currentNode); console.log("have to go up"); previousNode = currentNode; currentNode = currentNode.parent;}
			else if (currentNode.left === null && currentNode.right !== null) {callback(currentNode); previousNode = currentNode; currentNode = currentNode.right;}
			else {previousNode = currentNode; currentNode = currentNode.left}
		} 
		// explore upwards
		else if (currentNode === previousNode.parent && currentNode.left === previousNode) {
			console.log("going upwards from left")
			if (currentNode.right === null) {callback(currentNode); previousNode = currentNode; currentNode = currentNode.parent}
			else {                           callback(currentNode); previousNode = currentNode; currentNode = currentNode.right}
		}
		else {
			console.log("line 23 current @", currentNode.value)
			console.log("going upwards from right")
			console.log(currentNode.value, previousNode.value)
			previousNode = currentNode; currentNode = currentNode.parent
		}
		// console.log("finish", currentNode.value)
	}
}

// Do not edit the line below.
exports.iterativeInOrderTraversal = iterativeInOrderTraversal;
