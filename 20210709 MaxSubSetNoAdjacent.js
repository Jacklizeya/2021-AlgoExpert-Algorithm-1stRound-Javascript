function maxSubsetSumNoAdjacent(array) {
  // Write your code here.
	
let result = 0

function max( array, acc = 0 ) {

    console.log("array and acc", array, acc)

    if (array.length === 0) {if (acc > result) {result = acc}; return}
    if (array.length === 1) {if (acc + array[0] > result) {result = acc + array[0]} return}


    let removeOne = [...array]
    removeOne.pop()
    max(removeOne, acc)

    let removeTwo = [...array]
    removeTwo.pop(); removeTwo.pop()
    max(removeTwo, acc + array[array.length - 1])

}

max(array)
return (result)
}

// Do not edit the line below.
exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;
