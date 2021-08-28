function lineThroughPoints(points) {
  // Write your code here.
let count = -Infinity
for (i = 0; i < points.length - 1; i++) {
    for (j = i + 1; j < points.length; j++) {
        let point1 = points[i]
        let point2 = points[j]
        let possibleCount = 2
        for ( k = 0; k < points.length; k++) {
            
            if (k !== i && k !== j) {
                let point3 = points[k]
                console.log(point1, point2, point3)
                if ((point3[1] - point2[1]) * (point2[0] - point1[0]) === (point3[0] - point2[0]) * (point2[1] - point1[1]) ) {
                possibleCount++
            }}
        }
        if (possibleCount > count) {count = possibleCount}
    }
}  
console.log(count)
if (count  !==  -Infinity) {return count} else {return 1}
}

// Do not edit the line below.
exports.lineThroughPoints = lineThroughPoints;
