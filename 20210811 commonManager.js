function getLowestCommonManager(topManager, reportOne, reportTwo) {
  // Write your code here.
	  let Array1
		findReportOne(topManager, reportOne, [topManager])
		console.log(Array1)
	
		let Array2
		findReportTwo(topManager, reportTwo, [topManager])
		console.log(Array2)
	
	  for (i= Array1.length - 1; i >=0; i--) {
			if (Array2.includes(Array1[i])) {console.log(Array1[i]); return Array1[i]}
		}
	
	function findReportOne(topManager, reportOne, path = [topManager.name]) {
	// console.log(topManager.name, reportOne.name, path)
	if (topManager.name === reportOne.name) {
		Array1 = path}	
		
	if (topManager.directReports.length === 0) {return}
	
	topManager.directReports.forEach(report => {
		let newpath = [...path]
		newpath.push(report)
		findReportOne(report, reportOne, newpath)})
}	

	
	function findReportTwo(topManager, reportTwo, path = [topManager.name]) {
	// console.log(topManager.name, reportTwo.name, path)
	if (topManager.name === reportTwo.name) {
		Array2 = path}	
		
	if (topManager.directReports.length === 0) {return}
	
	topManager.directReports.forEach(report => {
		let newpath = [...path]
		newpath.push(report)
		findReportTwo(report, reportTwo, newpath)})
}	

}




// This is an input class. Do not edit.
class OrgChart {
  constructor(name) {
    this.name = name;
    this.directReports = [];
  }
}

// Do not edit the line below.
exports.getLowestCommonManager = getLowestCommonManager;


/// A better solution

function getLowestCommonManager(topManager, reportOne, reportTwo) {
  // Write your code here.
	let Array1
	let Array2
		findReports(topManager, reportOne, reportTwo, [topManager])
		console.log(Array1, Array2)
	
	  for (i= Array1.length - 1; i >=0; i--) {
			if (Array2.includes(Array1[i])) {console.log(Array1[i]); return Array1[i]}
		}

	
	function findReports(topManager, reportOne, reportTwo, path = [topManager.name]) {
	// console.log(topManager.name, reportTwo.name, path)
	if (topManager.name === reportOne.name) {
		Array1 = path}		
		
	if (topManager.name === reportTwo.name) {
		Array2 = path}	
		
	if (topManager.directReports.length === 0) {return}
	
	topManager.directReports.forEach(report => {
		let newpath = [...path]
		newpath.push(report)
		newpath.push(report)
		findReports(report, reportOne, reportTwo, newpath)})
}	
	
	
	
}

// This is an input class. Do not edit.
class OrgChart {
  constructor(name) {
    this.name = name;
    this.directReports = [];
  }
}

// Do not edit the line below.
exports.getLowestCommonManager = getLowestCommonManager;

