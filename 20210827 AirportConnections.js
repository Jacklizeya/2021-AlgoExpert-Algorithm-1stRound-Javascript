// success rate is 12/15 right now

function airportConnections(airports, routes, startingAirport) {
  // Write your code here.
let parentStorage = {}
for (let route of routes) {
    if (!parentStorage[route[1]]) {
        parentStorage[route[1]] = {parents: [route[0]], visited: false}
    }
    else {
        parentStorage[route[1]].parents.push(route[0])
    }
}
console.log(parentStorage)
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


// let upStreamqueue = [startingAirport]
// startingIndex = 0
// while (startingIndex < upStreamqueue.length) {
//     let currentAirport = upStreamqueue[startingIndex]
//     console.log(">> currentAirport", currentAirport)
//     if (parentStorage[currentAirport]) {parentStorage[currentAirport].parents.forEach(parent => {
//         if (!downStreamqueue.includes(parent)) {
//             if (parentStorage[parent].visited) {if (!noParent.includes(parent)) {noParent.push(parent)}}
//             else {upStreamqueue.push(parent)}
//         } 
//     })}

//     if (parentStorage[currentAirport]) {parentStorage[currentAirport].visited = true} else {parentStorage[currentAirport] = {visited: true}} 
//     startingIndex++
// }

function DFS(currentAirport, path = []) {
    console.log("DFS CurrentAirport", currentAirport)
    if (path.includes(currentAirport)) {if (!noParent.includes(currentAirport)) {console.log("find one loop", currentAirport); noParent.push(currentAirport)}; return}
    if (parentStorage[currentAirport]) {parentStorage[currentAirport].parents.forEach(parent => {
        if (!downStreamqueue.includes(parent)) {
            path.push(currentAirport)
            DFS(parent, path)
            path.pop()
        } 
    })}
}

DFS(startingAirport)

withoutItself = noParent.filter(element => element !== startingAirport)
console.log("no parent", withoutItself)
console.log(withoutItself.length)
return(withoutItself.length)
}
// Do not edit the line below.
exports.airportConnections = airportConnections;
