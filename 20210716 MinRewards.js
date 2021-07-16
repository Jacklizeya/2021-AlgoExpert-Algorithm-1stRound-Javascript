function minRewards(scores) {
  // Write your code here.
if (scores.length === 1) {return 1}

let valleys = []
if (scores[0] < scores[1]) {valleys.push(0)}
if (scores[scores.length - 1] < scores[scores.length - 2]) {valleys.push(scores.length - 1)}

for ( i = 1; i < scores.length - 1; i++ ) {
    if (scores[i] < scores[i-1] && scores[i] < scores[i+1]) {valleys.push(i)}
}

console.log(valleys)
console.log("includes", valleys.includes(8))

let rewards = []
for ( j = 0; j < scores.length; j++ ) {
    console.log(j)
    if (valleys.includes(j)) {console.log("yes", j); rewards.push(1)} else {console.log("not", j); rewards.push(null)}
} 

for (k = 0 ; k < valleys.length; k++) {
    let valley = valleys[k]
    // expand to left
    let left = valley - 1
    while (scores[left] > scores[left + 1] && left >= 0) {
        if (rewards[left] === null) {rewards[left] = rewards[left + 1] + 1} else {rewards[left] = rewards[left + 1] + 1 > rewards[left]? rewards[left + 1] + 1: rewards[left]}
        
        
        left--}
    
    // expand to right
    let right = valley + 1
    while (scores[right] > scores[right - 1] && right < scores.length) {
        if (rewards[right] === null) {rewards[right] = rewards[right - 1 ] + 1} else {rewards[right] = rewards[right - 1] + 1 > rewards[right]? rewards[right - 1] + 1: rewards[right]}
        rewards[right] = rewards[right - 1] + 1; 
        right++}
}

return(rewards.reduce((a,b)=>{return a+b}))
}

// Do not edit the line below.
exports.minRewards = minRewards;
