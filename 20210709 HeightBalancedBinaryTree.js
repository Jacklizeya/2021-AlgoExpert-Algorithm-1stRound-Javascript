// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function heightBalancedBinaryTree(tree) {
  // Write your code here.
	
	calculateHeight(tree)
  
	let result = true
	function checkBalance(tree) {
	console.log("checkbalance", tree.value)
	if (tree.left === null && tree.right === null) {return}
	if (tree.left === null && tree.right !== null) { if (tree.right.height > 1) {result = false}; return}
	if (tree.left !== null && tree.right === null) { if (tree.left.height > 1) {result = false}; return}
	if (tree.left !== null && tree.right !== null) { if (Math.abs(tree.right.height - tree.left.height > 1)) {result = false; return}; checkBalance(tree.left); checkBalance(tree.right); return}
	}
	
	checkBalance(tree)
	console.log(result)
  return result;
}

function calculateHeight(tree) {
	console.log(tree.value)
	if (tree.left === null && tree.right === null) {tree.height = 1; console.log("get to the bottom", tree); return 1; }
	if (tree.left === null && tree.right !== null) {tree.height = 1 + calculateHeight(tree.right); return tree.height}
	if (tree.left !== null && tree.right === null) {tree.height = 1 + calculateHeight(tree.left); return tree.height}
	if (tree.left !== null && tree.right !== null) {tree.height = 1 + Math.max(calculateHeight(tree.left), calculateHeight(tree.right)); return tree.height}
}



// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.heightBalancedBinaryTree = heightBalancedBinaryTree;
