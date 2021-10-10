const find_permutation = function(str, pattern) {
  // TODO: Write your code here
  let endIndex = pattern.length - 1
  let startIndex = 0
  while (endIndex < str.length) {
    if (areTheyPermutations(str.substring(startIndex, endIndex + 1), pattern)) {return true}
    startIndex++
    endIndex++
  }
  return false;
};

// let String="oidbcaf", Pattern="abe"
// console.log(find_permutation(String, Pattern))

function areTheyPermutations (string1, string2) {
  let storage1 = convertToObject(string1)
  let storage2 = convertToObject(string2)
  for (let key in storage1) {
    if (storage1[key] !== storage2[key]) {return false}
  }
  return true
}

function convertToObject(string) {
  let storage = {}
  for (let char of string) {
    if (!storage[char]) {storage[char] = 1} else {storage[char]++}
  }
  return storage
}
