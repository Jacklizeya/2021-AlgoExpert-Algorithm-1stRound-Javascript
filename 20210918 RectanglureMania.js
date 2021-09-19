function rectangleMania(coords) {
  // Write your code here.
	let length = coords.length
	let count  = 0 
	for (let i = 0; i < length - 3; i++) {
		for (let j = i + 1; j < length - 1 ; j++) {
			for (let k = j + 1; k < length -1 ; k++) {
				for (let s = k +1; s < length ; s++ ) {
					let fourPoints = [coords[i], coords[j], coords[k], coords[s]]
					// console.log("fourPoints", fourPoints, isSquare(fourPoints))
					if (isSquare(fourPoints)) {count ++}
				}
			}
		}
	}
	return count	
}

function isSquare(array) {
	
	let xCount = {}
	let yCount = {}
	for (let i =0; i < 4; i++) {
		let x = array[i][0]
		let y = array[i][1]
		if (!xCount[x]) {xCount[x] = 1} else {xCount[x] ++}
		if (!yCount[y]) {yCount[y] = 1} else {yCount[y] ++}
	}
	if (Object.keys(xCount).length !== 2 || Object.keys(yCount).length !==2) {return false} 
	
	for (let key in xCount) {if (xCount[key] !== 2) {return false}}
	for (let key in yCount) {if (yCount[key] !== 2) {return false}}
	return true
} 


// Do not edit the line below.
exports.rectangleMania = rectangleMania;
