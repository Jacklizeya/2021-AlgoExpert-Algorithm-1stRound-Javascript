// Use stack as the data Structure to solve the problem

function balancedBrackets(string) {
  // Write your code here.
	  let initalArray = string.split("")
		let array = []
		for (i=0; i< initalArray.length; i++)
			{
				if (["(", "[", "{", "}", "]", ")"].includes(initalArray[i])) {array.push(initalArray[i])}
			}
		
    let stack = [array[0]]

    for (i= 1; i< array.length; i++) {
        if (["(", "[", "{"].includes(array[i]))  {
            stack.push(array[i])
        } else if (
            (array[i] === ")" && stack[stack.length - 1] === "(")
             || (array[i] === "}" && stack[stack.length - 1] === "{")
             || (array[i] === "]" && stack[stack.length - 1] === "[")
             ) {
            stack.pop()
        } else {
            console.log(i, stack[stack.length - 1], array[i] )
            return false
        }
    }
    console.log("stack", stack)
    if (stack.length === 0) {return true} else {return false}
}

// Do not edit the line below.
exports.balancedBrackets = balancedBrackets;
