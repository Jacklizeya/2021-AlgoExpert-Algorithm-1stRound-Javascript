function calendarMatching(calendar1, dailyBounds1, calendar2, dailyBounds2, meetingDuration) {
  // Write your code here.
calendar1 = calendar1.map(interval => interval.map(time => convertToNumber(time)))
calendar2 = calendar2.map(interval => interval.map(time => convertToNumber(time)))
dailyBounds1 = dailyBounds1.map(interval => convertToNumber(interval))
dailyBounds2 = dailyBounds2.map(interval => convertToNumber(interval))
meetingDuration = meetingDuration/60

// step one, merge daily bound
let combinedDailyBound = dailyBounds1[0] < dailyBounds2[0] ? mergeBound(dailyBounds1, dailyBounds2) : mergeBound(dailyBounds2, dailyBounds1)
console.log("combinedDailyBound", combinedDailyBound)
// step two, put all the meetings into one array
let combinedCalendars = []
while (calendar1.length !== 0 && calendar2.length !== 0) {
    if (calendar1[0][0] <= calendar2[0][0]) {combinedCalendars.push(calendar1[0]); calendar1.shift()}
    else {combinedCalendars.push(calendar2[0]); calendar2.shift()}
}

if (calendar1.length === 0 && calendar2.length !== 0) {combinedCalendars.push(...calendar2)}
if (calendar1.length !== 0 && calendar2.length === 0) {combinedCalendars.push(...calendar1)}
// step three, merge any possible intervals
let i = 0
while (i < combinedCalendars.length - 1) {
    if (mergeInterval(combinedCalendars[i], combinedCalendars[i + 1]) === null) {i++}
    else {combinedCalendars[i] = mergeInterval(combinedCalendars[i], combinedCalendars[i + 1]); combinedCalendars.splice(i+1, 1)}   
}
console.log("newlycombined", combinedCalendars)
if (combinedCalendars.length === 0) {return [combinedDailyBound.map(interval => convertToMilitary(interval))]}	
	
// step four, find out avialbe spots
let result = []
    // for starting
    let firstPossibleStartTime = combinedDailyBound[0]
    if (firstPossibleStartTime + meetingDuration <= combinedCalendars[0][0]) {
        result.push([firstPossibleStartTime, combinedCalendars[0][0]])
    }
for (i = 0; i < combinedCalendars.length - 1; i++) {
    let startingTime = Math.max(combinedCalendars[i][1], combinedDailyBound[0])
    let finishTime = Math.min(combinedCalendars[i + 1][0], combinedDailyBound[1])
    if (finishTime - startingTime >= meetingDuration) {
        result.push([startingTime, finishTime])
    }
}
    // for ending
    let lastPossibleStartTime = combinedCalendars[combinedCalendars.length - 1][1]
    if (lastPossibleStartTime + meetingDuration <= combinedDailyBound[1]) {
        result.push([lastPossibleStartTime, combinedDailyBound[1]])
    }
console.log("all possible time", result)
// step five, merge any available spots
i = 0
while (i < result.length - 1) {
    if (mergeInterval(result[i], result[i + 1]) === null) {i++}
    else {result[i] = mergeInterval(result[i], result[i + 1]); result.splice(i+1, 1)}   
}
console.log("newlycombined", result)
// step six, convert to right format
result = result.map(interval => interval.map(time => convertToMilitary(time)))
console.log("final result", result)
return result

function convertToNumber(timeString) {
    timeArray = timeString.split(":")
    let hour = Number(timeArray[0])
    let minute = Number(timeArray[1])
    // console.log(hour, minute)
    return hour + minute/60
}

function convertToMilitary(timeNumber) {
    let hour = timeNumber - timeNumber % 1
    console.log("after dot", timeNumber % 1)
    let minute = parseInt(timeNumber % 1 * 60) 
    hour = hour.toString()
    if (minute < 10) {minute = "0" + minute} else {minute = minute.toString()}
    console.log("hourand minute", hour, minute)
    return hour + ":" + minute
}

function mergeBound(interval1, interval2) {
    if (interval1[1] < interval2[0]) {return null}
    else {
        let newStartingTime = interval2[0]
        let newFinishingTime = Math.min(interval1[1], interval2[1])
        return [newStartingTime, newFinishingTime]
    }
}

function mergeInterval(interval1, interval2) {
    if (interval1[1] < interval2[0]) {return null}
    else {
        let newStartingTime = interval1[0]
        let newFinishingTime = Math.max(interval1[1], interval2[1])
        return [newStartingTime, newFinishingTime]
    }
}
}

// Do not edit the line below.
exports.calendarMatching = calendarMatching;
