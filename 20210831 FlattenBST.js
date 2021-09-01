// This is the class of the input root. Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function flattenBinaryTree(root) {
  // Write your code here.
	let array = []
	inOrderTraverse(root)
	console.log(array)
	for (i =0 ; i < array.length -1; i++)  {
		let leftNode = array[i]
		let rightNode = array[i+1]
		leftNode.right = rightNode
		rightNode.left = leftNode
	}
	return array[0]
	
	function inOrderTraverse(root) {
	if (root.left === null && root.right === null) { array.push(root); }
	if (root.left === null && root.right !== null) { array.push(root); inOrderTraverse(tree.right);}
	if (root.left !== null && root.right === null) { inOrderTraverse(root.left); array.push(root); }
	if (root.left !== null && root.right !== null) { inOrderTraverse(root.left); array.push(root); inOrderTraverse(root.right);}
}
	
	
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.flattenBinaryTree = flattenBinaryTree;
