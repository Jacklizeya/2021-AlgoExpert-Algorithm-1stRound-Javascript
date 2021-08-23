function apartmentHunting(blocks, reqs) {
  // Write your code here.

let index = Infinity
let min = Infinity
for (i=0; i < blocks.length; i++) {
    if (findAllReqsDistance(i, reqs) < min) {min = findAllReqsDistance(i, reqs); index = i}
}
console.log("min, index", min, index)
return index

function findOneReqDistance (index, req) {
    let leftMove = 0
    let rightMove = 0

    while (index + rightMove < blocks.length) {
        if (blocks[index + rightMove][req] === true) {break;}
        rightMove++
    }
    if (index + rightMove === blocks.length) {rightMove = Infinity}

    while (index - leftMove >= 0) {
        if (blocks[index - leftMove][req] === true) {break;}
        leftMove++
    }
    if (index - leftMove < 0) {leftMove = Infinity}
    console.log(req, leftMove, rightMove, Math.min(leftMove, rightMove))
    return Math.min(leftMove, rightMove)
}


function findAllReqsDistance(index, reqs) {
    let distanceToAll = -Infinity
    reqs.forEach(req => {
        distanceToAll = Math.max(findOneReqDistance(index, req), distanceToAll)
    })
    console.log("maxDistance", distanceToAll)
    return distanceToAll
}
}

// Do not edit the line below.
exports.apartmentHunting = apartmentHunting;
