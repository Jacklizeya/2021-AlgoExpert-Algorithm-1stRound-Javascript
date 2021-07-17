// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function Isparent(firstNode, secondNode)
	{
		if (firstNode.value === secondNode.value) {return true} else {
		if (firstNode.left === null && firstNode.right === null) {return false}	
		if (firstNode.left !== null && firstNode.right === null) {return Isparent(firstNode.left, secondNode)}
		if (firstNode.left === null && firstNode.right !== null) {return Isparent(firstNode.right, secondNode)}
		if (firstNode.left !== null && firstNode.right !== null) {return (Isparent(firstNode.left, secondNode) || Isparent(firstNode.right, secondNode))}
		}
		
	}

function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
  // Write your code here.
  return (Isparent(nodeOne, nodeTwo) && Isparent(nodeTwo, nodeThree)) || (Isparent(nodeTwo, nodeOne)&& Isparent(nodeThree, nodeTwo));
}

// Do not edit the lines below.
exports.BST = BST;
exports.validateThreeNodes = validateThreeNodes;
