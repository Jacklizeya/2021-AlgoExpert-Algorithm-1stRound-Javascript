function diskStacking(disks) {
  // Write your code here.
if (disks.length === 0) {return []}	
	
let maxHeight = -Infinity
let result 

function putSomethingOnBottom(history) {
    console.log(history)

    let lastDisk = history[history.length - 1]
    let availableDisks = disks.filter(element => {return element[0] > lastDisk[0] && element[1] > lastDisk[1] && element[2] > lastDisk[2]})
    console.log(availableDisks)
    if (availableDisks.length === 0) {let total = history.reduce((accumulator, currentElement) => {return accumulator + currentElement[2]}, 0); if (total > maxHeight) {maxHeight = total; result = [...history]}}

    availableDisks.forEach(disk => {
        let newhistory = [...history]
        newhistory.push(disk)
        putSomethingOnBottom([...newhistory])
    })

}

putSomethingOnBottom([[0, 0, 0]])
result.shift()
console.log("result", result)
	return result
}

// Do not edit the line below.
exports.diskStacking = diskStacking;
