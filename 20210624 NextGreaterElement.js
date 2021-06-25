function nextGreaterElement(array) {
  // Write your code here.
  
let initiallength = array.length
let maxValue = Math.max(...array)
array.push(...array)
console.log("new array", array)

// let sortedArray = [...array].sort()

// console.log(sortedArray)

let outputArray = []
let targetValue
for (i = 0; i < initiallength; i++ ) {
    let currentValue = array[i]
    
    if (currentValue === maxValue) { targetValue = -1 } else {
        
        for (j = i+1; j < array.length; j++) {
        if (array[j] > currentValue) {
            targetValue = array[j];
            break
        }

        
    }   
}

    outputArray.push(targetValue)
}

return (outputArray)
}

// Do not edit the line below.
exports.nextGreaterElement = nextGreaterElement;
