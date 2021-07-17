// traverse to figure property out, then do calculation
// as a boss (self + both side), as a report (self + one side)


function maxPathSum(tree) {
  // Write your code here.
	let array = []
	traverseAndAssign(tree)
	array.sort((a, b)=>{return b-a})
	return array[0]
	
	function traverseAndAssign(tree)
	{
		console.log(tree.value)
		if (tree.left === null && tree.right === null ) {
			tree.asboss = tree.value; tree.asreporter = tree.value; 
			array.push(tree.asboss, tree.asreporter)
			return}
		if (tree.left === null && tree.right !== null ) {
			traverseAndAssign(tree.right);
			tree.asboss = tree.value + tree.right.asreporter
			tree.asreporter = tree.value + tree.right.asreporter
			array.push(tree.asboss, tree.asreporter)
		}
		if (tree.left !== null && tree.right === null ) {
			traverseAndAssign(tree.left);
			tree.asboss = tree.value + tree.left.asreporter
			tree.asreporter = tree.value + tree.left.asreporter
			array.push(tree.asboss, tree.asreporter)
		}
		if (tree.left !== null && tree.right !== null ) {
			traverseAndAssign(tree.left); 
			traverseAndAssign(tree.right);
			tree.asboss = tree.value + tree.left.asreporter + tree.right.asreporter
			tree.asreporter = tree.value + Math.max(tree.left.asreporter, tree.right.asreporter)
			array.push(tree.asboss, tree.asreporter)
		}
	}
	
	
}








// Do not edit the line below.
exports.maxPathSum = maxPathSum;
