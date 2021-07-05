function hasSingleCycle(array) {
  // Write your code here.
	let currentIndex = 0
	let storage = {}
	let result = false

	storage[currentIndex.toString()] = "visited"

	for (i= 0; i < array.length; i++) {
			currentIndex = currentIndex + array[currentIndex]
			if (currentIndex < 0) {currentIndex = currentIndex % array.length + array.length}
    	if (currentIndex >= array.length) {currentIndex = currentIndex % array.length}
			storage[currentIndex.toString()] = "visited"
			console.log(currentIndex)
			console.log(storage)
	}

	if (Object.keys(storage).length === array.length && currentIndex === 0) {result = true}
	return result
}

// Do not edit the line below.
exports.hasSingleCycle = hasSingleCycle;
