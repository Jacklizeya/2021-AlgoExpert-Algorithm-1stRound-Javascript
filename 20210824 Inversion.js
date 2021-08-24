// This is not fast enough, but it works

function countInversions(array) {
  // Write your code here.
	if (array.length === 0) {return 0}
  let count = 0
	for (i= 0; i < array.length - 1; i++) {
			for (j = i + 1; j < array.length; j++) {
					if (array[i] > array[j]) {count ++}
			}
	}
	return count
}

// Do not edit the line below.
exports.countInversions = countInversions;
