function laptopRentals(times) {
  // Write your code here.
	
if (times.length ===0 ) {return 0}
times.sort((a, b)=>{return a[0] - b[0]})

console.log(times)

let earlistTime = times[0][0]
let latestTime = times[times.length - 1][1]

let possibleTime = []
for (let i = earlistTime + 0.5; i <= latestTime - 0.5; i++ ) {
    possibleTime.push(i)
}

console.log(possibleTime)
let result = - Infinity
for (j=0; j<possibleTime.length; j++) {
    let overlappedIntervals = 0
    for (k=0; k<times.length; k++) {
        if (possibleTime[j] > times[k][0] && possibleTime[j] < times[k][1]) {
            overlappedIntervals++; 
            if (overlappedIntervals > result) {result = overlappedIntervals}
        }
    }
}

return result
}

// Do not edit the line below.
exports.laptopRentals = laptopRentals;
