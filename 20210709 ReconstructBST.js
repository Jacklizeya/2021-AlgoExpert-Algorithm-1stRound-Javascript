// This is an input class. Do not edit.
class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function feed(parent, child)
	{
		if (child.value < parent.value ) {if (parent.left === null) {parent.left = child; return} else {feed(parent.left, child)} }
		if (child.value >= parent.value) {if (parent.right === null) {parent.right = child; return} else {feed(parent.right, child)}}
	}


function reconstructBst(preOrderTraversalValues) {
  // Write your code here.
	let nodes = preOrderTraversalValues.map(value => new BST(value))
	let root = nodes[0]
	
	for (i=1; i< nodes.length; i++)
		{feed(root, nodes[i])}
	
	console.log(root)
	
  return root;
}

// Do not edit the lines below.
exports.BST = BST;
exports.reconstructBst = reconstructBst;
