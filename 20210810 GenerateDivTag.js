function generateDivTags(numberOfTags) {
  // Write your code here.
	
		let result = []
  	function addDiv(whatHasBeenAdded, numberOfOpen, numberOfClose)
    {
        console.log(numberOfOpen, numberOfClose)
        if (numberOfClose === 0) {result.push(whatHasBeenAdded); return}
        if (numberOfOpen < 0 || numberOfClose < 0) {return}

        if (numberOfOpen === numberOfClose) {
            addDiv(whatHasBeenAdded + "<div>", numberOfOpen -1, numberOfClose)
        }
        else if (numberOfOpen < numberOfClose) {
            addDiv(whatHasBeenAdded + "<div>", numberOfOpen -1, numberOfClose)
            addDiv(whatHasBeenAdded + "</div>", numberOfOpen, numberOfClose - 1)
        } 

    }

		addDiv("", numberOfTags, numberOfTags)
		console.log(result)
		return result
}

// Do not edit the line below.
exports.generateDivTags = generateDivTags;
