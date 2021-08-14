function interweavingStrings(one, two, three) {
  // Write your code here.
	
let stackOne = one.split("")
let stackTwo = two.split("")
let stackThree = three.split("")
console.log(stackOne, stackTwo, stackThree)
let result = false

function check(stackOne, stackTwo, stackThree) {
    // console.log("stackone, two, three", stackOne, stackTwo, stackThree)
    if (stackThree.length === 0) {console.log("reach 0"); result = result || true; return}

    if (stackOne[stackOne.length - 1] !== stackThree[stackThree.length - 1] && stackTwo[stackTwo.length - 1] !== stackThree[stackThree.length - 1]) {
        result = result || false; 
    }
    else if (stackOne[stackOne.length - 1] === stackThree[stackThree.length - 1] && stackTwo[stackTwo.length - 1] !== stackThree[stackThree.length - 1]) {
        let stackOneCopy = [...stackOne]
        stackOneCopy.pop()
        let stackThreeCopy = [...stackThree]
        stackThreeCopy.pop()
        check(stackOneCopy, [...stackTwo], stackThreeCopy)
    }
    else if (stackOne[stackOne.length - 1] !== stackThree[stackThree.length - 1] && stackTwo[stackTwo.length - 1] === stackThree[stackThree.length - 1]) {
        let stackTwoCopy = [...stackTwo]
        stackTwoCopy.pop()
        let stackThreeCopy = [...stackThree]
        stackThreeCopy.pop()
        check([...stackOne], stackTwoCopy, stackThreeCopy)
    }
    else if (stackOne[stackOne.length - 1] === stackThree[stackThree.length - 1] && stackTwo[stackTwo.length - 1] === stackThree[stackThree.length - 1]) {
        let stackOneCopy = [...stackOne]
        stackOneCopy.pop()
        let stackTwoCopy = [...stackTwo]
        stackTwoCopy.pop()
        let stackThreeCopy = [...stackThree]
        stackThreeCopy.pop()
        check([...stackOne], stackTwoCopy, stackThreeCopy)
        check(stackOneCopy, [...stackTwo], stackThreeCopy)
    }
}

check(stackOne, stackTwo, stackThree)
console.log(result)
return result
}

// Do not edit the line below.
exports.interweavingStrings = interweavingStrings;
