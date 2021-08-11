/// based on CS Dojo's explaination
/// https://www.youtube.com/watch?v=0SkOjNaO1XY


function quickSort(array, left = 0, right = array.length - 1, ) {
      console.log(array, left, right)
    // Write your code here.
  
      if (left >= right ) {return array}
      
      let pivot = array[right]
      let occupier = left - 1
      let explorer = left 
      while (explorer < right) {
          if (array[explorer] <= pivot && occupier === explorer - 1) { occupier++; explorer++}
          else if (array[explorer] > pivot) {explorer++}
          else if (array[explorer] <= pivot && occupier !== explorer - 1) {
              swap(array, explorer, occupier + 1) 
              occupier++
              explorer++
          }
      }

      swap(array, right, occupier + 1)
      quickSort(array, left, occupier,  )
      quickSort(array, occupier + 2, right)
	    return array
      }
  
  function swap(array, i, j) {
          let temp = array[i]
          array[i] = array[j]
          array[j] = temp}

// Do not edit the line below.
exports.quickSort = quickSort;
