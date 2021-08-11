function underscorifySubstring(string, substring) {
  // Write your code here.
	
if (!string.includes(substring)) {return string}
	
let result = ""
let markerArray = []


for (i=0; i< string.length; i++) {
    if ( string[i]=== substring[0] && string.substring(i, i+substring.length) === substring) {markerArray.push([i, i + substring.length -1])}
}



for (j= 0 ; j < markerArray.length - 1; j++) {
    if (markerArray[j+1][0] - markerArray[j][1] <= 1) {
        // consider a merge here
        markerArray[j][1] = markerArray[j+1][1]
        markerArray.splice(j+1, 1)
        j--
    }
}
console.log(markerArray)
result = result + string.substring(0, markerArray[0][0])
for (k= 0; k < markerArray.length; k++) {
    if (k === markerArray.length - 1) {result = result + "_" + string.substring(markerArray[k][0], markerArray[k][1] + 1) + "_" +  string.substring(markerArray[k][1] + 1, string.length)}
		else {
    result =  result + "_" + string.substring(markerArray[k][0], markerArray[k][1] + 1) + "_" +  string.substring(markerArray[k][1] + 1, markerArray[k+1][0])}
}


	return result
}

// Do not edit the line below.
exports.underscorifySubstring = underscorifySubstring;
