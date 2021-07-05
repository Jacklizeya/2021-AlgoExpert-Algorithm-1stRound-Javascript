// Do not edit the class below except
// for the breadthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    // Write your code here.
		array.push(this)
		let i = 0
		while (array[i]) {
			if (array[i].children !== [] ) {array.push(...array[i].children)}
			i++
		}
		
		return array.map(element => element.name)
  }
}

// Do not edit the line below.
exports.Node = Node;
