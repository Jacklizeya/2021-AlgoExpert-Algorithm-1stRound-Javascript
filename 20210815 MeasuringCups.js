/// The brute force approach, use DFS, something need to be optimized
/// Tried storage hash map, tried to use the bigger ones first, but still not able to pass all test

function ambiguousMeasurements(measuringCups, low, high) {
  // Write your code here.
	// does it meet minimum accuracy?
measuringCups.sort((a, b) => b[1] - a[1])
console.log(measuringCups, low, high)
let accuracy = measuringCups.map(cup => cup[1] - cup[0])
console.log(Math.min(...accuracy), high - low)
if (Math.min(...accuracy) > high - low) {return false}
	
// we must maintain the accuracy, introduce big cup will mess up the accuracy	
measuringCups = measuringCups.filter(cup => cup[1]- cup[0] < high - low)


let status = "notfound"
let result = false
let storage = {}

function addingCups(lower, higher)
  {
	// console.log(storage)   
	// // time to stop  
	// console.log(lower, higher)
    if (status === "found") {return}
		if (storage[makeAKey === false]) {return}
    if (lower > high || (lower > low && higher > high) || higher > high || higher - lower > high - low) {
        storage[makeAKey(lower, higher)] = false; 
        findAllTheFalsePath(lower, higher)
        return}

    if (lower >= low && higher <= high) {result = true; status = "found"; console.log("range", lower, higher); return}

    // recursive function to keep adding, generate paths
    measuringCups.forEach(cup => {
        if (storage[makeAKey(lower + cup[0], higher + cup[1])] !== false) {addingCups(lower + cup[0], higher + cup[1])}
    })
  }
  
addingCups(0, 0)
console.log(result, status)
return result
	
// Maximize the usage of the result, back recursively to eliminate all the non-going-to-work solutions
function findAllTheFalsePath(lower, higher) {
    if (lower <= 0) {return}
    measuringCups.forEach(cup => {
        newLower = lower - cup[0]
        newHigher = higher - cup[1]
        if (storage[makeAKey[newLower, newHigher] !== false || storage[makeAKey[newLower, newHigher]] !== true]) { storage[makeAKey[newLower, newHigher]] = false }
    })
}	
	
}

// Generate a key
function makeAKey(a , b){
	return a + ":" + b
}



// Do not edit the line below.
exports.ambiguousMeasurements = ambiguousMeasurements;
