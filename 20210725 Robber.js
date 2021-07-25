// grab exact capacity
// grab over capacity, return one back
// no items left
// sequence matters


function knapsackProblem(items, capacity) {
  // Write your code here.
  // Replace return below.
if (capacity === 0) {return [0 , []]}
  
  let result = [-Infinity, []]
  
  
  function grab(array, pocket, leftCapacity) {
    //   console.log("staring", "array", array, "pocket", pocket, "leftCapacity", leftCapacity, "current max value", result[0])
    if (leftCapacity === 0 ) {
        if (pocket.length > 0) {
            let value = pocket.reduce((total, num)=> { return total + num[0]}, 0);
            if (value > result[0]) {result[0] = value; result[1] = pocket}}
            return
      } 
      // if i grab too many, I have to return it back
    else if (leftCapacity < 0) {
        if (pocket.length > 1) {
            pocket.pop()
            let value = pocket.reduce((total, num)=> { return total + num[0]}, 0);
            if (value > result[0]) {result[0] = value; result[1] = pocket}}
            return
        }
    else if (array.length === 0) {
        if (pocket.length > 0) {
            let value = pocket.reduce((total, num)=> { return total + num[0]}, 0);
            if (value > result[0]) {result[0] = value; result[1] = pocket}}
            return
        }
  

  // not grabing this
      let nextArray = [...array]
      nextArray.shift()
      let nextPocket = [...pocket]
      grab (nextArray, nextPocket, leftCapacity)
  
  // grab the array
      let newArray = [...array]
          let newPocket = [...pocket]
          newPocket.push(newArray[0])
          let newCapacity = leftCapacity - newArray[0][1]
      newArray.shift()
        
      grab(newArray, newPocket, newCapacity)
  
  }
  
  grab(items, [], capacity)
  result[1] = result[1].map(element => {return items.indexOf(element)})
  

return result
}
// Do not edit the line below.
exports.knapsackProblem = knapsackProblem;
