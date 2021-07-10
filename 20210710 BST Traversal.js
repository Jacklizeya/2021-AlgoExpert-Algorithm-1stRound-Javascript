function inOrderTraverse(tree, array = []) {
  // Write your code here.
	console.log("in", tree.value)
	if (tree.left === null && tree.right === null) { array.push(tree.value); return array}
	if (tree.left === null && tree.right !== null) { array.push(tree.value); inOrderTraverse(tree.right, array) ; return array}
	if (tree.left !== null && tree.right === null) { inOrderTraverse(tree.left, array); array.push(tree.value); return array}
	if (tree.left !== null && tree.right !== null) { inOrderTraverse(tree.left, array); array.push(tree.value); inOrderTraverse(tree.right, array);  console.log(array); return array}
}

function preOrderTraverse(tree, array) {
  // Write your code here.
	console.log("pre", tree.value)
	if (tree.left === null && tree.right === null) { array.push(tree.value); return array}
	if (tree.left === null && tree.right !== null) { array.push(tree.value); preOrderTraverse(tree.right, array) ; return array}
	if (tree.left !== null && tree.right === null) { array.push(tree.value); preOrderTraverse(tree.left, array); return array}
	if (tree.left !== null && tree.right !== null) { array.push(tree.value); preOrderTraverse(tree.left, array); preOrderTraverse(tree.right, array);  console.log(array); return array}
}

function postOrderTraverse(tree, array) {
  // Write your code here.
	console.log("post", tree.value)
	if (tree.left === null && tree.right === null) { array.push(tree.value); return array}
	if (tree.left === null && tree.right !== null) { postOrderTraverse(tree.right, array); array.push(tree.value); return array}
	if (tree.left !== null && tree.right === null) { postOrderTraverse(tree.left, array); array.push(tree.value); return array}
	if (tree.left !== null && tree.right !== null) { postOrderTraverse(tree.left, array); postOrderTraverse(tree.right, array);  array.push(tree.value); console.log(array); return array}
}

// Do not edit the lines below.
exports.inOrderTraverse = inOrderTraverse;
exports.preOrderTraverse = preOrderTraverse;
exports.postOrderTraverse = postOrderTraverse;
