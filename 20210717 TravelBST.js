// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findNodesDistanceK(tree, target, k) {
  // Write your code here.
	let targetNode
	
	function traverse(tree, parent = null) {
		if (tree === null) {return}
		if (tree.value === target) {targetNode = tree}
		tree.parent = parent;
		if (tree.left === null && tree.right === null) {traverse(tree.left, tree); traverse(tree.right, tree)}
		if (tree.left === null && tree.right !== null) {traverse(tree.right, tree)}
		if (tree.left !== null && tree.right === null) {traverse(tree.left, tree);}
		if (tree.left !== null && tree.right !== null) {traverse(tree.left, tree); traverse(tree.right, tree)}
	}
	
	traverse(tree)
	console.log(tree)
	let result = []
	function travel(node, step, direction) {
		console.log(node.value, step, direction)
		if (node === null) {return}
		if (node !== null && step === 0 ) {result.push(node.value); console.log("just pushed", node.value);return}
		if (node !== null && step > 0) {
			if (direction === "original") {
				if (node.parent && node.parent.left === node) {travel(node.parent, step - 1, "rightparent")}; 
				if (node.parent && node.parent.right === node) {travel(node.parent, step - 1, "leftparent")}; 
				if (node.left) {travel(node.left, step - 1, "leftchild")}; 
				if (node.right) {travel(node.right, step - 1, "rightchild")}}
			else if (direction === "leftparent") {
				if (node.parent) {travel(node.parent, step - 1, "leftparent")}; 
				if (node.left) {travel(node.left, step - 1, "leftchild")}; }
			else if (direction === "rightparent") {
				if (node.parent) {travel(node.parent, step - 1, "rightparent")}; 
				if (node.right) {travel(node.right, step - 1, "rightchild")}}
			else if (direction === "leftchild") {
				if (node.left) {travel(node.left, step - 1, "leftchild")}; 
				if (node.right) {travel(node.right, step - 1, "rightchild")}}
			else if (direction === "rightchild") {
				if (node.left) {travel(node.left, step - 1, "leftchild")}; 
				if (node.right) {travel(node.right, step - 1, "rightchild")}}
		}
	}
	
	travel(targetNode, k, "original")
	
  return result;
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.findNodesDistanceK = findNodesDistanceK;
