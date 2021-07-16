function zigzagTraverse(array) {
  // Write your code here.


let rowMax = array.length - 1
let colMax = array[0].length - 1

if (rowMax === 0) {return array[0]}
if (colMax === 0) {
	let output = []
	for (let s = 0; s <= rowMax; s++){output.push(array[s][0])}
	return output
}
	
let result = [array[0][0]]


let i = 1
let j = 0
let arrowPointingToMe = "south" 

while (i <= rowMax && j <= colMax) {
    
    console.log(i, j, arrowPointingToMe)
    result.push(array[i][j])
   
    if (arrowPointingToMe === "south") { 
        if (j===0) {arrowPointingToMe = "northeast"; i--; j++} else {arrowPointingToMe="southwest"; i++; j--}
    }
    else if (arrowPointingToMe === "east") {
        if (i===0) {arrowPointingToMe = "southwest"; i++; j--} else {arrowPointingToMe="northeast"; i--; j++}
        }
    else if (arrowPointingToMe === "southwest") {
        console.log(i, j, colMax, rowMax, "here")
        if (j === 0 && i < rowMax) {arrowPointingToMe = "south"; i++}
        else if (i === rowMax) {arrowPointingToMe = "east"; j++}
        else {i++; j--}
        }
    else if (arrowPointingToMe === "northeast") {
        if (i ===0 && j < colMax) {arrowPointingToMe = "east"; j++}
        else if (j === colMax) {arrowPointingToMe = "south"; i++}
        else {i--; j++}
    }
}


return(result)
}

// Do not edit the line below.
exports.zigzagTraverse = zigzagTraverse;
