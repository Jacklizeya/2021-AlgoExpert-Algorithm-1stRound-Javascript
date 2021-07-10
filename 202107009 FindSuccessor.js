// One week to traverse the BST
// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node) {
  // Write your code here.
	let array = []
	
	function traverse(tree) {
		
	if (tree.left === null && tree.right === null) { array.push(tree.value); return}
	if (tree.left === null && tree.right !== null) { array.push(tree.value); traverse(tree.right); return}
	if (tree.left !== null && tree.right === null) { traverse(tree.left); array.push(tree.value); return}
	if (tree.left !== null && tree.right !== null) { traverse(tree.left); array.push(tree.value); traverse(tree.right); return}
	}
	
	traverse(tree)
	console.log(array)
	console.log(node.value)
	let index = array.indexOf(node.value)
	console.log(index)
	let result = array[index + 1]
	console.log(result)
	console.log({"nodeId": result})
	return {"nodeId": result}

}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.findSuccessor = findSuccessor;
