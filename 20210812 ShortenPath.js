function shortenPath(path) {
  // Write your code here.
let pathArray = path.split("/")
let newPathArray = pathArray.filter(element => element!== "")
console.log(newPathArray)


let pathStorage = []
    // situation one: absolute path
	if (path[0] === "/") {
        let startingLevel = 0
		for (i=0; i< newPathArray.length; i++) {
            if (newPathArray[i] === ".." && startingLevel < 0) {
                pathStorage.pop()
                startingLevel++
            }
            else if (newPathArray[i] === ".." && startingLevel === 0) {
                // do nothing
            }
            else if (newPathArray[i] === "." ) {
                // do nothing
            }
            else {
                pathStorage.push(newPathArray[i])
                startingLevel --
            }
            console.log("pathStorage", i, pathStorage)}	
        return ("/" + pathStorage.join("/"))
    } 
    // situation two Relative Path        
	else {
        for (i=0; i< newPathArray.length; i++) {
            console.log(newPathArray[i], pathStorage)
            // 3 cases for "..", before is test, before is "..", before is nothing
            if (newPathArray[i] === ".." && pathStorage.length === 0) {pathStorage.push("..")}
            else if (newPathArray[i] === ".." && pathStorage[pathStorage.length - 1] === "..") {
                pathStorage.push("..")
            }
            else if (newPathArray[i] === ".." && pathStorage[pathStorage.length - 1] !== "..") {
                pathStorage.pop()
            }
            else if (newPathArray[i] === "." ) {
                // do nothing
            }
            else {
                pathStorage.push(newPathArray[i])
                
            }
            
        }
            
		return (pathStorage.join("/"))
    }

}

// Do not edit the line below.
exports.shortenPath = shortenPath;
