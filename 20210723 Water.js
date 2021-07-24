function waterArea(heights) {
  // Write your code here.

let leftMax = - Infinity
let leftMaxArray = []

let rightMax = -Infinity
let rightMaxArray = []

for (i=0; i< heights.length; i++) {
    if (heights[i] > leftMax) {leftMax = heights[i]}
    leftMaxArray.push(leftMax)
    
    if (heights[heights.length - 1 - i] > rightMax) {rightMax = heights[heights.length - 1 - i]}
    rightMaxArray.unshift(rightMax)
}

let sum = 0
let finalHeight = []
for (i=0; i< heights.length; i++) {
    finalHeight.push(Math.min(leftMaxArray[i], rightMaxArray[i]))
    sum = sum + finalHeight[i] - heights[i]
}

console.log(leftMaxArray, rightMaxArray, finalHeight, sum)
return sum
}

// Do not edit the line below.
exports.waterArea = waterArea;
