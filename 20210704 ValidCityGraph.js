function validStartingCity(distances, fuel, mpg) {
  // Write your code here.
  class node {
    constructor (fuel, distanceToNext) {
        this.fuel = fuel
        this.distanceToNext = distanceToNext
        this.next = null
    }
}

let nodes = fuel.map((element, index) => {return new node(element, distances[index])})
console.log(nodes)

nodes.forEach((node, index) => {if (index === nodes.length - 1) {node.next = nodes[0]} else {node.next = nodes[index + 1]}})
console.log(nodes)

let nodesCount = nodes.length

function testDrive() {
    for (let startingLocation = 0; startingLocation < nodesCount; startingLocation++) {
        
        let currentNode = nodes[startingLocation]
        let culmulativeFuel = 0
        let culmulativeDistance = 0
        let cityCount = 0
        while (cityCount < nodesCount) {
            
            culmulativeFuel = culmulativeFuel + currentNode.fuel
            culmulativeDistance = culmulativeDistance + currentNode.distanceToNext
            console.log("startingLocaiton", startingLocation, "cityCount", cityCount, "culDis", culmulativeDistance, "culFuel", culmulativeFuel)
            currentNode = currentNode.next
            cityCount++
            if (culmulativeFuel < culmulativeDistance / mpg) {break;}
        }
        console.log("cityCount", "nodesCount", cityCount, nodesCount)
        if (cityCount === nodesCount) {return startingLocation}
    }
}

return( testDrive())

}

// Do not edit the line below.
exports.validStartingCity = validStartingCity;
