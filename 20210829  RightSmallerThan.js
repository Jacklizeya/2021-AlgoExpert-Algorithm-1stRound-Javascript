// soultion 
// 1: have a left child smaller property
// 2: on the way to desired location, accumulate what needs to be added
// 3: one thing keep in mind is that equal is special case

function rightSmallerThan(array) {
  // Write your code here.
	if (array.length === 0) {return []}
	
	let nodes = array.map(element => new BSTNode(element))
	let root = nodes[nodes.length - 1]
	let result = [0]
	for (let i = nodes.length -2; i>=0; i--) {
		
		let count = insertIntoTree(nodes[i], root)
		console.log(count)
		result.unshift(count)
	}
	console.log(result)
	return result
}

class BSTNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
		this.leftChildSmaller = 0
	}
}

function insertIntoTree(node, parentNode, count = 0) {
	if (node.value < parentNode.value && parentNode.left !== null) { parentNode.leftChildSmaller++; return insertIntoTree(node, parentNode.left, count)}
	if (node.value < parentNode.value && parentNode.left === null) { parentNode.leftChildSmaller++; parentNode.left = node; return count }
	if (node.value > parentNode.value && parentNode.right !== null) {return insertIntoTree(node, parentNode.right, count + parentNode.leftChildSmaller + 1)}
	if (node.value > parentNode.value && parentNode.right === null) {parentNode.right = node; return count + parentNode.leftChildSmaller + 1}
	if (node.value === parentNode.value && parentNode.right !== null) {return insertIntoTree(node, parentNode.right, count + parentNode.leftChildSmaller)}
	if (node.value === parentNode.value && parentNode.right === null) {parentNode.right = node; return count + parentNode.leftChildSmaller}
}
// Do not edit the line below.
exports.rightSmallerThan = rightSmallerThan;
