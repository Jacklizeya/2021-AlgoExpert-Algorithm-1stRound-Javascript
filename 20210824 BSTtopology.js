function numberOfBinaryTreeTopologies(n) {
  // Write your code here.
	return option(n)
	
	function option(n) {
    if (n === 0) {return 1}
    if (n === 1) {return 1}
    if (n === 2) {return 2}

    let sum = 0
    for (let i = 0; i < n; i++) {
        console.log(i, n - 1 - i)
        sum += option(i) * option( n - 1 - i)
    }
    return sum   
}
	
}

// Do not edit the line below.
exports.numberOfBinaryTreeTopologies = numberOfBinaryTreeTopologies;
