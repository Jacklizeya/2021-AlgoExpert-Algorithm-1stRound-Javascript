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
	let marker
	
	function traverse(tree) {
		
	if (tree.left === null && tree.right === null) { add(tree); return}
	if (tree.left === null && tree.right !== null) { add(tree); traverse(tree.right); return}
	if (tree.left !== null && tree.right === null) { traverse(tree.left); add(tree); return}
	if (tree.left !== null && tree.right !== null) { traverse(tree.left); add(tree); traverse(tree.right); return}
	}
	
	function add(tree) {
		console.log(tree)
		array.push(tree)
		if (tree.value === node.value) {marker = array.length}
	}
	
	traverse(tree)
	console.log(array)
	console.log(node.value)
	console.log("result", array[marker])
	
	return array[marker]

}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.findSuccessor = findSuccessor;
