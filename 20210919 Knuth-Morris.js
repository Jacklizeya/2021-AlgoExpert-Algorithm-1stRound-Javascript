// this is a solution can cover 10/12


function knuthMorrisPrattAlgorithm(string, substring) {
	// let substring = "aefcdaefeaefcd"
	// let string = "aefcdfaecdaefaefcdaefeaefcdcdeae"
let target = substring.length - 1



let storage = {}
function generateMap(string) {
  for (let i = 1; i <= string.length; i++) {
    substring = string.substring(0, i)
    // console.log("substring", substring)
    checkMaxHeadTail(substring)
    // console.log("storage", storage)
  }
  function checkMaxHeadTail(substring) {
    let mapTo = -1
    for (let j = 1; j < substring.length; j++) {
      if (substring.substring(0, j) === substring.substring(substring.length - j, substring.length)) { mapTo = Math.max(mapTo, j - 1) }
    }
    storage[substring.length - 1] = mapTo
  }
}

generateMap(substring)
console.log("storage", storage)
let runCount = 0
let currentIndexInSmall = -1
for (let k = 0; k < string.length; k++) {
  if (string[k] === substring[currentIndexInSmall + 1]) {
    console.log("k and sitatuion", k, "match")
    currentIndexInSmall++
  } else if (string[k] !== substring[currentIndexInSmall + 1] && (storage[currentIndexInSmall] === -1 || currentIndexInSmall === -1)) {
    console.log("k and sitatuion", k, "do not match and nothing similar", currentIndexInSmall)
    currentIndexInSmall = -1
	
  }
  else {
    console.log("k and sitatuion", k, "do not match but can keep some")
    currentIndexInSmall = storage[currentIndexInSmall]

    k--
  }

  if (currentIndexInSmall === target) { console.log("find it!"); return true }

}
return false

}

// Do not edit the line below.
exports.knuthMorrisPrattAlgorithm = knuthMorrisPrattAlgorithm;
