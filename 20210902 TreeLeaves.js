// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function compareLeafTraversal(tree1, tree2) {
  // Write your code here.
   let path1 = []
	 collectLeaves(tree1, path1)
	 let path2 = []
	 collectLeaves(tree2, path2)
	 console.log(path1, path2)
	 if (path1.length !== path2.length) {return false}
	 for (let i= 0; i < path1.length; i++) {
		 if (path1[i] !== path2[i]) {return false}
	 }
	 return true
	
	function collectLeaves(node, path) {
		if (node.left === null && node.right === null) {path.push(node.value)}	
		if (node.left !== null && node.right === null) {collectLeaves(node.left, path)}	
		if (node.left === null && node.right !== null) {collectLeaves(node.right, path)}	
		if (node.left !== null && node.right !== null) {collectLeaves(node.left, path); collectLeaves(node.right, path)}	
	}
		
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.compareLeafTraversal = compareLeafTraversal;
