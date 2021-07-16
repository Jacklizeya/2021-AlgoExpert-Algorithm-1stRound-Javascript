function largestRange(array) {
  // Write your code here.

let distinctValue = [...new Set(array)]
distinctValue.push(Infinity)
console.log(distinctValue.sort((a ,b )=>{return a-b}))

let longstarting = 0
let longestrange = 0

let currentstarting = 0
let currentrange = 0

for (i = 1; i <= distinctValue.length; i++) {
    if (distinctValue[i] - distinctValue[i-1] === 1) {
        console.log(i);
        currentrange++ 
    }
    else {
        console.log(i)
        if (currentrange > longestrange) {longestrange = currentrange; longstarting = currentstarting}
        currentstarting = i; currentrange = 0
    }
}


console.log(longstarting, longestrange)
return([distinctValue[longstarting], distinctValue[longstarting] + longestrange])
	
}

// Do not edit the line below.
exports.largestRange = largestRange;
