let airports = ["BGI", "CDG", "DEL", "DOH", "DSM", "EWR", "EYW", "HND", "ICN", "JFK", "LGA", "LHR", "ORD", "SAN", "SFO", "SIN", "TLV", "BUD"]
let routes = [
    ["DSM", "ORD"],
    ["ORD", "BGI"],
    ["BGI", "LGA"],
    ["SIN", "CDG"],
    ["CDG", "DEL"],
    ["DEL", "DOH"],
    ["DOH", "SIN"],
    ["EWR", "HND"],
    ["HND", "ICN"],
    ["ICN", "JFK"],
    ["JFK", "LGA"],
    ["EYW", "LHR"],
    ["LHR", "SFO"],
    ["SFO", "SAN"],
    ["SAN", "EYW"]
  ]

let startingAirport = "LGA"

/*
1. Find those one without any upstream
2. Find upstream with loops
3. Find the rest by loops
*/

let parentStorage = {}
for (let route of routes) {
    if (!parentStorage[route[1]]) {
        parentStorage[route[1]] = {parents: [route[0]], visited: false}
    }
    else {
        parentStorage[route[1]].parents.push(route[0])
    }
}

let haveParents = []
for (let key in parentStorage) {
    haveParents.push(key)
}
console.log(haveParents)

let noParent = airports.filter(airport => !haveParents.includes(airport))
console.log(noParent)

for (let element of noParent) {
    routes.push([startingAirport, element])
}

childrenStorage = {}
for (let route of routes) {
    if (!childrenStorage[route[0]]) {
        childrenStorage[route[0]] = {children: [route[1]], visited: false}
    }
    else {
        childrenStorage[route[0]].children.push(route[1])
    }
}
console.log("childrenStorage", childrenStorage)

let downStreamqueue = [startingAirport]
let startingIndex = 0
while (startingIndex < downStreamqueue.length) {
    let currentAirport = downStreamqueue[startingIndex]
    console.log(">> currentAirport", currentAirport)
    if (childrenStorage[currentAirport]?.children) {childrenStorage[currentAirport].children.forEach(child => {
        if (!childrenStorage[child]?.visited) {downStreamqueue.push(child)} 
    })}

    if (childrenStorage[currentAirport]) {childrenStorage[currentAirport].visited = true} else {childrenStorage[currentAirport] = {visited: true}} 
    startingIndex++
}
console.log("downStreamqueue", downStreamqueue)

let noCovered = airports.filter(airport => !downStreamqueue.includes(airport))
console.log(noCovered)

function upstreamDFS(currentAirport, path = []) {
    // console.log("upstreamDFS CurrentAirport", currentAirport, path, parentStorage[currentAirport])
    if (path.includes(currentAirport)) {
        // console.log("here"); 
        if (!noParent.includes(currentAirport)) {
        // console.log("find one loop", currentAirport); 
        noParent.push(currentAirport)}; 
        downStreamqueue.push(...path); 
        noCovered = noCovered.filter(element => !path.includes(element)); return}
    if (parentStorage[currentAirport]) {
        console.log("there"); 
        parentStorage[currentAirport].parents.forEach(parent => {
            // console.log(parent); 
            // console.log(downStreamqueue);
                if (!downStreamqueue.includes(parent)) {
                    // console.log("line 96")
                    path.push(currentAirport)
                    upstreamDFS(parent, path)
                    path.pop()
                } else {
                    // console.log("line 96"); 
                    return}
    })}
}


upstreamDFS(startingAirport)
noCovered = airports.filter(airport => !downStreamqueue.includes(airport))
// console.log("line 108", downStreamqueue, noCovered)
// upstreamDFS(noCovered[0])
// console.log("line 110", downStreamqueue, noCovered)
// upstreamDFS(noCovered[0])
// console.log("line 112", downStreamqueue, noCovered)
while (noCovered.length !== 0) {upstreamDFS(noCovered[0])}
withoutItself = noParent.filter(element => element !== startingAirport)
console.log("no parent", withoutItself, downStreamqueue)
console.log(withoutItself.length)
return(withoutItself.length)
