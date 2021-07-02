function phoneNumberMnemonics(phoneNumber) {
  // Write your code here.
let inputArray = phoneNumber.split("")

let object = {
    "1": ["1"],
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
    "0": ["0"]
}

let output = [...object[phoneNumber[0]]]

function combine (array1, array2) {
    // console.log("insidefunction", array1, array2)
    array1.forEach(
        element1 => array2.forEach(
            element2 => output.push(element1 + element2)
        ))
}

for (i = 1; i < inputArray.length; i++) {
    let initialLength = output.length
    // console.log("before", output, initialLength, "secondArray", [...object[phoneNumber[i]]])
    let firstArray = [...output]
    // console.log("test", i, inputArray, inputArray[i], object, object[inputArray[i]], "second")
    let secondArray = [...object[inputArray[i]]]
    combine(firstArray, secondArray )
    // console.log("after combine", output)
    output = output.slice(initialLength, output.length)
    // console.log("round", i, output)
}


return (output)
}

// Do not edit the line below.
exports.phoneNumberMnemonics = phoneNumberMnemonics;
