// Do not edit the class below except for the
// populateSuffixTrieFrom and contains methods.
// Feel free to add new properties and methods
// to the class.
class SuffixTrie {
    constructor(string) {
      this.root = {};
      this.endSymbol = '*';
      this.populateSuffixTrieFrom(string);
    }
  
    populateSuffixTrieFrom(string) {
      // Write your code here.
// Write your code here.
      // Write your code here.
        // let oldkey = ""
			for (let i = 0; i < string.length; i++ )
			{
                // get sequence and pointer to the beginning
                let targetString = string.substring(i, string.length)
                let currentObject = this.root
                // save each sequence into this.root from start
                for (let j=0; j < targetString.length; j++) {
                    // console.log("j", j, targetString)
                    // the core part will be here
                    if (! Object.keys(currentObject).includes(targetString[j])) { currentObject[targetString[j]] = {}; 
                    // console.log(this.root)
                }
                    else {}
                    currentObject = currentObject[targetString[j]]
                }
                console.log("line23 last view", currentObject)
                currentObject["*"] = true
			}
      return this.root  
    }
  
    contains(string) {
      // Write your code here.
    let currentObject = this.root
    for (let i = 0; i < string.length; i++)
    {
        if (Object.keys(currentObject).includes(string[i])) {currentObject = currentObject[string[i]]} else {return false}

    }
    console.log("lastshape", currentObject)
    if (!Object.values(currentObject).includes(true)) {return false} else {return true}
    // need to reach the bottom
  }
	
	
}
  // Do not edit the line below.
  exports.SuffixTrie = SuffixTrie;
  
