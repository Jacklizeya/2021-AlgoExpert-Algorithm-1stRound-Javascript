// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree, min = - Infinity, max = Infinity) {
  // Write your code here.
		console.log(tree.value, min, max)
		if (tree.value < min || tree.value >= max) {console.log("false"); return false}
		if (tree.right === null &&  tree.left === null) {console.log("end"); return true}
		if (tree.right === null &&  tree.left !== null) {console.log("left");return validateBst(tree.left, min, tree.value ) && tree.left.value < tree.value}
		if (tree.right !== null &&  tree.left === null) {console.log("right");return validateBst(tree.right, tree.value, max) && tree.right.value >= tree.value}
		if (tree.right !== null &&  tree.left !== null) {console.log("2 branch");return validateBst(tree.left, min, tree.value) && tree.left.value < tree.value && validateBst(tree.right, tree.value, max) && tree.right.value >= tree.value}
}

// Do not edit the line below.
exports.BST = BST;
exports.validateBst = validateBst;
