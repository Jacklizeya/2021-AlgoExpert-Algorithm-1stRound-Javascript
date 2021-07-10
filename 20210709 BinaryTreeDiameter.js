// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function binaryTreeDiameter(tree) {
  // Write your code here.
	let result = 0
	
	function radius(tree) {
	console.log(tree.value)
	if (tree.left === null && tree.right === null) {tree.radius = 0; console.log("get to the bottom", tree.value); return 0; }
	if (tree.left === null && tree.right !== null) {tree.radius = 1 + radius(tree.right); return tree.radius}
	if (tree.left !== null && tree.right === null) {tree.radius = 1 + radius(tree.left); return tree.radius}
	if (tree.left !== null && tree.right !== null) {tree.radius = 1 + Math.max(radius(tree.left), radius(tree.right)); return tree.radius}
	}
	
	radius(tree)
	console.log(tree)
	
	function traverse(tree) {
		if (tree.left === null && tree.right === null) {tree.diameter = 0; if (tree.diameter > result) {result = tree.diameter}; return }
		if (tree.left === null && tree.right !== null) {tree.diameter = tree.radius; traverse(tree.right); if (tree.diameter > result) {result = tree.diameter}; return}
		if (tree.left !== null && tree.right === null) {tree.diameter = tree.radius; traverse(tree.left); if (tree.diameter > result) {result = tree.diameter}; return}
		if (tree.left !== null && tree.right !== null) {tree.diameter = 2 + tree.left.radius + tree.right.radius; if (tree.diameter > result) {result = tree.diameter}; traverse(tree.right); traverse(tree.left); return}
	}
	
	traverse(tree)
	console.log(tree)
	
	console.log(result)
  return result;
}

// Do not edit the line below.
exports.binaryTreeDiameter = binaryTreeDiameter;
exports.BinaryTree = BinaryTree;
