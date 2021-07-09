function minNumberOfCoinsForChange(n, denoms) {
  // Write your code here.
 
denoms.sort((a,b)=>{return a-b})
let result = Infinity


function find(currentNumber, array, count = 0) {
    console.log(currentNumber, array, count)
    if (array.length === 0 && currentNumber !== 0 ) { return }
    if (array.length === 0 && currentNumber === 0 ) { if (count < result) {result = count; return} else {return}}

    let maximum = Math.floor(currentNumber / array[array.length - 1])
    let newArray = [...array]; newArray.pop()
   
    let split = [...Array(maximum + 1).keys()]
    console.log(split)
    
    split.forEach( (element, index) =>   {
        console.log(element, "followinginput", currentNumber - array[array.length-1] * element, [...newArray], count + element)
        find(currentNumber - array[array.length-1] * element, [...newArray], count + element)
    })
}

find(n, denoms)

if (result === Infinity) {return -1}
return (result)
}

// Do not edit the line below.
exports.minNumberOfCoinsForChange = minNumberOfCoinsForChange;
