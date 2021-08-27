function waterfallStreams(array, source) {
  // Write your code here.
	let maxRow = array.length
let maxCol = array[0].length
console.log(maxRow, maxCol)
let volumes = array[0].map(element => 0)

function explore(i = 0 , j = source, volume = 100, direction = "downwards") {
    console.log(i, j, array[i][j], direction)
    if (i === maxRow - 1) {volumes[j] += volume; return}
    // check downwards
    if (i + 1 < maxRow  && i >=0 && j >= 0 && j < maxCol && array[i + 1][j] === 0) {explore(i+1, j, volume, "downwards")}
    else {
        if (i < maxRow && i >= 0 && j - 1 >=0 && j - 1 < maxCol &&  array[i][j-1] === 0 && (direction === "downwards")) {
            explore(i, j-1, 0.5 * volume, "left")}
        if (i < maxRow && i >= 0 && j - 1 >=0 && j - 1 < maxCol &&  array[i][j-1] === 0 && (direction ==="left")) {
            explore(i, j-1, volume, "left")}
        if (i < maxRow && i >= 0 && j + 1 >=0 && j + 1 < maxCol &&  array[i][j+1] === 0 && (direction === "downwards")) {
            explore(i, j+1, 0.5 * volume, "right")}
        if (i < maxRow && i >= 0 && j + 1 >=0 && j + 1 < maxCol &&  array[i][j+1] === 0 && (direction ==="right")) {
            explore(i, j+1, volume, "right")}
    }
}

explore()
console.log(volumes)
return volumes
}

// Do not edit the line below.
exports.waterfallStreams = waterfallStreams;
