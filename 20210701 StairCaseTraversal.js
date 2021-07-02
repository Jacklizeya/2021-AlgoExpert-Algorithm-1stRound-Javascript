function staircaseTraversal(height, maxSteps) {
  // Write your code here.
let stepArray = [...Array(maxSteps).keys()].map(step => step + 1)
let count = 0

function lastStep(h) {
    console.log(h)
    if (h === 0 ) { count++; return}
    if (h < 0) { return}
    stepArray.forEach(step => lastStep(h - step))
}

lastStep(height)

return (count)
}

// Do not edit the line below.
exports.staircaseTraversal = staircaseTraversal;
