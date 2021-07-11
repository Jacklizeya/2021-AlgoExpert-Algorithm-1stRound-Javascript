// This is the code pass 80% of the test

// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
		if (value < this.value && this.left !== null) {this.left.insert(value);}
		if (value < this.value && this.left === null) {this.left = new BST(value); }
		if (value >= this.value && this.right !== null) {this.right.insert(value); }
		if (value >= this.value && this.right === null) {this.right = new BST (value); }
    return this;
  }

  contains(value) {
		console.log("contains", value)
    // Write your code here.
		if (value === this.value) {return true}
		if (value < this.value && this.left !== null) {return this.left.contains(value)}
		if (value < this.value && this.left === null) {return false}
		if (value > this.value && this.right !== null) {return this.right.contains(value)}
		if (value > this.value && this.right === null) {return false}
  }

  remove(value, parent = null) {
    // Write your code here.
    // Do not edit the return statement of this method.
		console.log("********remove","remove target", value, "from", this)
		
		if (value === this.value && this.right !== null && this.left !== null) {
			console.log("this", this.value)
			let previous = this
			let current = this.right
			while (current.left !== null) {
				previous = current
				current = current.left
			}
			console.log("+++++, previous", previous, "current", current)
			this.value = current.value
			console.log("success47", this, previous)
			if (this == previous) { this.right = null; return this} else {this.value = current.value; previous.left = current.right; return this}
			}
		if (value === this.value && this.right !== null  && this.left === null) {this.value = this.right.value; this.left = this.right.left; this.right = this.right.right; return this }
		if (value === this.value && this.right === null  && this.left !== null) {this.value = this.left.value; this.right = this.left.right; this.left = this.left.left ; return this}
		if (value === this.value && this.right === null  && this.left === null) {if (this === parent.left) {parent.left = null} else {parent.right = null}; return this}
		if (value < this.value && this.left !== null) { this.left.remove(value, this); return this}
		if (value < this.value && this.left === null) {return this}
		if (value > this.value && this.right !== null) {this.right.remove(value, this); return this}
		if (value > this.value && this.right === null) {return this}
		
		// console.log("new this", this)
    // return this;
  }
}

// Do not edit the line below.
exports.BST = BST;
