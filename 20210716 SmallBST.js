function sameBsts(arrayOne, arrayTwo) {
  // Write your code here.

function reorganize(array, result = []) {

    if (array.length === 0) {return}
    if (array.length === 1) {result.push(array[0]); return}

    result.push(array[0])
    let bigpart = array.slice(1, array.length).filter(element => element >= array[0])
    let smallpart = array.slice(1, array.length).filter(element => element < array[0])
    reorganize(bigpart, result)
    reorganize(smallpart, result)
    console.log("result", result)
    return result
}

let resultOne = reorganize(arrayOne)
let resultTwo = reorganize(arrayTwo)
console.log(resultOne)
console.log(resultTwo)
let same = true
for (i=0; i< Math.max(arrayOne.length, arrayTwo.length); i++) {
    if (resultOne[i] !== resultTwo[i] ) {same = false; break;}
}

return(same)
}

// Do not edit the line below.
exports.sameBsts = sameBsts;
