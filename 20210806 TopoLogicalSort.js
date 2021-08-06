function topologicalSort(jobs, deps) {
  // Write your code here.
let storage = {}
for (i = 0; i < jobs.length; i++) {
    storage[jobs[i]] = []
}

for (i = 0; i < deps.length; i++) {
    if (storage[deps[i][1]].length === 0) {storage[deps[i][1]] = [deps[i][0]]}
    else {storage[deps[i][1]].push(deps[i][0])}
}

// console.log(storage)


let result = []

function DFS(object, cumulative = []) {
    // console.log("object and cumulative", object, cumulative)
    let leads = []
    for ( let key in object) {
        // console.log(key)
        // console.log(object[key])
        if (object[key].length === 0) {leads.push(parseInt(key))}
    }
    // console.log("leads", leads)
    if (leads.length === 0) {if (cumulative.length === jobs.length) {result.push(cumulative)}; return}

    leads.forEach(lead => {
        // console.log("singleLEAD", lead)
        let newStorage = {...object};
        delete newStorage[lead]
        // console.log("newStorage after removing the lead key", newStorage)
        let filteredStorage = {}
        for (let every in newStorage) {
            if (newStorage[every].length !== 0) {filteredStorage[every] = newStorage[every].filter(element => element !== lead)}
            else {filteredStorage[every] = newStorage[every]}
        }
        // console.log("filtered storage after removing lead key from each", filteredStorage)
        let newCumulative = [...cumulative]
        newCumulative.push(lead)
        // console.log("new cumulative", newCumulative)
        DFS({...filteredStorage}, [...newCumulative])
        
    })

}

	DFS(storage, [])
	if (result.length === 0) {return []} else {return result[0]}
}

// Do not edit the line below.
exports.topologicalSort = topologicalSort;
