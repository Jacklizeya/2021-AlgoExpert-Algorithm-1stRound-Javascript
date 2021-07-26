function nonAttackingQueens(n) {
  // Write your code here.
  let count = 0
	let nArray = [...Array(n).keys()]


function place (colPosition, history) {

    let historyCopy = [...history]
    let avoidColumn = [...history]
    historyCopy.forEach((element, index) => avoidColumn.push(element + colPosition - index, element - colPosition + index))
    let availableSpots = nArray.filter(element => {return !avoidColumn.includes(element)})

    if (colPosition <= n-1 && availableSpots.length === 0) {return}
    if (colPosition === n-1 && availableSpots.length !== 0) {count += availableSpots.length; return}

    availableSpots.forEach(spot => {let newHistory = [...historyCopy]; newHistory.push(spot); place(colPosition + 1, [...newHistory])})
}

place (0, [])

return (count)
}

// Do not edit the line below.
exports.nonAttackingQueens = nonAttackingQueens;
