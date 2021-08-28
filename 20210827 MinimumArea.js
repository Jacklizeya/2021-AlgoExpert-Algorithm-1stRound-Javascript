function minimumAreaRectangle(points) {
  // Write your code here.
let xStorage = {}
let yStorage = {}
for (let point of points) {
    if (!xStorage[point[0]]) {xStorage[point[0]] = 1} else {xStorage[point[0]] ++}
    if (!yStorage[point[1]]) {yStorage[point[1]] = 1} else {yStorage[point[1]] ++}
}  
console.log("x y storage", xStorage, yStorage)

let xOptions = []
for (let x in xStorage) {
    if (xStorage[x] >=2 ) {xOptions.push(parseInt(x))}
}
let yOptions = []
for (let y in yStorage) {
    if (yStorage[y] >=2 ) {yOptions.push(parseInt(y))}
}
console.log("x options and y options", xOptions, yOptions)   

let qualifiedPoints = points.filter(point => xOptions.includes(point[0]) && yOptions.includes(point[1]))
let qualifiedPointsInString = qualifiedPoints.map(element => element.join("&"))
console.log(qualifiedPoints)

let area = Infinity
for (i =0 ; i < xOptions.length - 1; i++) {
    for (j = i + 1; j< xOptions.length; j++) {
        for (k =0 ; k < yOptions.length - 1; k++) {
            for (s = k +1 ; s < yOptions.length; s++) {
                let point1 = [xOptions[i], yOptions[k]]
                let point2 = [xOptions[i], yOptions[s]]
                let point3 = [xOptions[j], yOptions[k]]
                let point4 = [xOptions[j], yOptions[s]]
                console.log("all the points", point1, point2, point3, point4, qualifiedPointsInString)
                if (
                    qualifiedPointsInString.includes(point1[0] + "&" + point1[1])
                    && qualifiedPointsInString.includes(point2[0] + "&" + point2[1])
                    && qualifiedPointsInString.includes(point3[0] + "&" + point3[1])
                    && qualifiedPointsInString.includes(point4[0] + "&" + point4[1])
                ) {
                    possibleArea = Math.abs((xOptions[j] - xOptions[i]) * (yOptions[k] - yOptions[s]))
                    console.log("possible", possibleArea)
                    if (possibleArea < area) {area = possibleArea}
                }
            }
        }
    }
}

console.log(area)
if (area !== Infinity) {return area} else {return 0}
}
// Do not edit the line below.
exports.minimumAreaRectangle = minimumAreaRectangle;
