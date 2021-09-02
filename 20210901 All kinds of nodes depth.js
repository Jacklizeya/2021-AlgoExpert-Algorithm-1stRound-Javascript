function allKindsOfNodeDepths(root) {
  // Write your code here.
	let sum = 0
	traverse(root)
	return sum
	
	
	
	function traverse(root) {
		if (root.left === null && root.right === null) {
			root.totalDepth = 0; 
			root.childCount = 0; 
			sum += root.totalDepth
		}
		if (root.left !== null && root.right === null) {
			traverse(root.left); 
			root.childCount = root.left.childCount + 1; 
			root.totalDepth = root.left.totalDepth + root.left.childCount + 1
		  sum += root.totalDepth}
		if (root.left === null && root.right !== null) {
			traverse(root.right); 
			root.childCount = root.right.childCount + 1; 
			root.totalDepth = root.right.totalDepth + root.right.childCount + 1
		 sum += root.totalDepth}
		if (root.left !== null && root.right !== null) {
			traverse(root.left); traverse(root.right);  
			root.childCount = root.right.childCount + root.left.childCount + 2; 
			root.totalDepth = root.right.totalDepth + root.right.childCount + root.left.totalDepth + root.left.childCount + 2
			sum += root.totalDepth
		}
	}
	
}
// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.allKindsOfNodeDepths = allKindsOfNodeDepths;
