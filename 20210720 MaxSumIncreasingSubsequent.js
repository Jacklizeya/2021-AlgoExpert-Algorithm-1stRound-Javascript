function maxSumIncreasingSubsequence(array) {
  // Write your code here.

let arrayCopy = [...array]
arrayCopy.sort((a, b)=>{return (a - b)})
let result = [Math.max(...array), [arrayCopy[arrayCopy.length - 1]]]

function addsup(array, storage = [0]) {
    console.log(array, storage)
    if (array.length === 0) { if (storage.reduce((a, b)=>{return a + b}) > result[0]) {storage.shift(); result = [storage.reduce((a, b)=>{return a + b}), storage]}; return}
 
    let newarray = [...array]
    newarray.shift()
    let newstorage = [...storage]
    newstorage.push(array[0])


    // add case
    if (array[0] > storage[storage.length-1] && array[0] > 0) {addsup(newarray, newstorage)}
    // not going to add case, will always execute
    let copystorage = [...storage]
    addsup(newarray, copystorage)

}

if (result[0] <=0 ) {} else {addsup(array)}

return(result)
}

// Do not edit the line below.
exports.maxSumIncreasingSubsequence = maxSumIncreasingSubsequence;
