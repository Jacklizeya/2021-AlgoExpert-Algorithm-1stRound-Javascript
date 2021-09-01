// This is the class of the input root. Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function rightSiblingTree(root) {
  // Write your code here.
	let queue = [root]
	let index = 0
	root.index = 0
	root.level = 0
	while (index < queue.length) {
		let currentNode = queue[index]
		if (currentNode.left !== null && currentNode.right !== null) {
			console.log("debug", currentNode.value, currentNode.left.value, currentNode.right.value)
			currentNode.left.index = 2 * currentNode.index
			currentNode.left.level = currentNode.level + 1
			currentNode.right.level = currentNode.level + 1
			currentNode.right.index = 2 * currentNode.index + 1
			queue.push(currentNode.left, currentNode.right)}
		else if (currentNode.left !== null && currentNode.right === null) {
			currentNode.left.index = 2 * currentNode.index
			currentNode.left.level = currentNode.level + 1
			queue.push(currentNode.left)}
		else if (currentNode.left === null  && currentNode.right !== null) {
			currentNode.right.level = currentNode.level + 1
			currentNode.right.index = 2 * currentNode.index + 1
			queue.push(currentNode.right)}
		else {}
		queue[index].right = null
		index++		
	}
	
	for (i= 1; i < queue.length - 1; i++) {
		if (queue[i].level === queue[i+1].level && queue[i+1].index - queue[i].index === 1) {queue[i].right = queue[i+1]}	
	}
	
	return queue[0]
	
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.rightSiblingTree = rightSiblingTree;
