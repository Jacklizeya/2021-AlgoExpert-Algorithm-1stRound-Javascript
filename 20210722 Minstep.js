function minNumberOfJumps(array) {
  // Write your code here.
	let result = Infinity

	function moveForward(index, step = 0 ) {

			if (index > array.length - 1) {return}
			if (index === array.length - 1) {if(step < result) {result = step}; return}

			let maxJump = array[index]
			let jumpArray = [...Array(maxJump + 1).keys()]
			jumpArray.shift()
			jumpArray.forEach(element => moveForward(index + element, step + 1))
	}

	moveForward(0, 0)
	return(result)
}

// Do not edit the line below.
exports.minNumberOfJumps = minNumberOfJumps;
