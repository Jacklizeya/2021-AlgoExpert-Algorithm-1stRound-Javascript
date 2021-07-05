// This is an input class. Do not edit.
class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function findAllAncestors(startingNode, history = []) {
		let currentNode = startingNode
		while (currentNode.ancestor !== null) {
			currentNode = currentNode.ancestor
			history.push(currentNode)
		}	
		
		return history
	}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  // Write your code here.
	let result
	let descentdantOneHistory = findAllAncestors(descendantOne)
	descentdantOneHistory.unshift(descendantOne)
	if (! descentdantOneHistory.includes(topAncestor)) {descentdantOneHistory.push(topAncestor)}
	
	let descentdantTwoHistory = findAllAncestors(descendantTwo)
	descentdantTwoHistory.unshift(descendantTwo)
	if (! descentdantTwoHistory.includes(topAncestor)) {descentdantTwoHistory.push(topAncestor)}
	console.log(descentdantOneHistory, descentdantTwoHistory)
	
	for (i = 0; i < descentdantOneHistory.length; i++) {
		console.log(i, descentdantTwoHistory.includes(descentdantOneHistory[i]))
		if (descentdantTwoHistory.includes(descentdantOneHistory[i])) {result = descentdantOneHistory[i]; break}
	}
	console.log("result is ", result)
	return result
}

// Do not edit the lines below.
exports.AncestralTree = AncestralTree;
exports.getYoungestCommonAncestor = getYoungestCommonAncestor;
