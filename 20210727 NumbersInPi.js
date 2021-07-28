function numbersInPi(pi, numbers) {
  // Write your code here.
	
	
let qualifiedNumbers = numbers.filter(number => pi.includes(number))
let result = Infinity
console.log(qualifiedNumbers)

function peel (string, count = 0) {
    console.log(string, count)
    if (string.length === 0) { if (count-1 < result) {result = count-1} return}

    let possiblePeel = numbers.filter(element => string.includes(element) && string.substring(0, element.length) === element)
    if (possiblePeel.length ===0 ) {return}

    possiblePeel.forEach(
        element => {
            newString = string.slice(element.length, string.length)
            peel(newString, count + 1)
        }
    )
}

peel(pi, 0)
if (result === Infinity) {return -1} else {return(result)}
}

// Do not edit the line below.
exports.numbersInPi = numbersInPi;
