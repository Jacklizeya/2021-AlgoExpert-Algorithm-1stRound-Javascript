function quickselect(array, k, left = 0, right = array.length - 1) {
     console.log("between", left, right, "find", k)

     // if (left >= right) {return array[left]}
    // Write your code here.
     let pivot = array[right]
     let explorer = left
     let occupier = left - 1 
      
     while(explorer <= right - 1) {
        if (array[explorer] < pivot && explorer === occupier + 1) {explorer++; occupier++}
        else if (array[explorer] < pivot && explorer !== occupier + 1) {
            swap(array, explorer, occupier+1); explorer++; occupier++
        }
        else {explorer++}
        
     }

     swap(array, right, occupier + 1)


     // the middle one is at occupier + 1
     if (occupier - left + 2 === k) { return array[occupier + 1]} 
     else if (occupier - left + 2 < k) { return quickselect(array, k - occupier + left - 2, occupier + 2, right )}
     else {return quickselect(array, k, left, occupier)}
          
  }

  
  function swap(array, i, j) {
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp}
// Do not edit the line below.
exports.quickselect = quickselect;
