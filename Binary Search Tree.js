// class Node {
// 	constructor(data, left = null, right = null) {
// 		this.data = data;
// 		this.left = left;
// 		this.right = right;
// 	}
// }

// class BST {
// 	constructor() {
// 		this.root = null;
// 	}

// 	//INSERTING NODES LOGIC
// 	insert(value) {
// 		const current = this.root;
// 		if (current === null) {
// 			this.root = new Node(value);
// 			return;
// 		} else {
// 			const searchTree = (node) => {
// 				if (value < node.data) {
// 					if (node.left === null) {
// 						node.left = new Node(value);
// 						return;
// 					} else if (node.left !== null) {
// 						return searchTree(node.left);
// 					}
// 				} else if (value > node.data) {
// 					if (node.right === null) {
// 						node.right = new Node(value);
// 						return;
// 					} else if (node.right !== null) {
// 						return searchTree(node.right);
// 					}
// 				} else {
// 					return null;
// 				}
// 			};
// 			return searchTree(current);
// 		}
// 	}

// 	//FIND MIN
// 	min() {
// 		let current = this.root;
// 		while (current.left) {
// 			current = current.left;
// 		}
// 		console.log(current.data);
// 	}

// 	//FIND MAX

// 	max() {
// 		let current = this.root;
// 		while (current.right) {
// 			current = current.right;
// 		}
// 		console.log(current.data);
// 	}

// 	//IS PRESENT
// 	present(value) {
// 		let current = this.root;

// 		if (current.data === value) return true;
// 		else {
// 			const searchTree = (node) => {
// 				if (value < node.data) {
// 					if (node.data === value) return true;
// 					else if (node.left === null) {
// 						return false;
// 					} else if (node.left !== null) {
// 						return searchTree(node.left);
// 					}
// 				} else {
// 					if (node.data === value) return true;
// 					else if (node.right === null) {
// 						return false;
// 					} else if (node.right !== null) {
// 						return searchTree(node.right);
// 					}
// 				}
// 			};
// 			return searchTree(current);
// 		}
// 	}

// 	//INORDER TRAVERSAL
// 	print() {
// 		let current = this.root;
// 		if (current.left) {
// 			this.print(current.left);
// 		}
// 		console.log(current.data);

// 		if (current.right) {
// 			this.print(current.right);
// 		}
// 	}
// }

// const tree = new BST();
// tree.insert(9);
// tree.insert(6);
// tree.insert(99);
// tree.insert(0);
// tree.insert(12);
// tree.insert(3);
// tree.insert(31);
// tree.insert(5);
// tree.min();
// tree.max();
// tree.print();
// console.log(tree.present(1));

class Node {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class BST {
	constructor() {
		this.root = null;
	}
	insert(value) {
		let current = this.root;
		if (!current) {
			this.root = new Node(value);
		} else if (current) {
			const searchTree = (node) => {
				if (value < node.val) {
					if (!node.left) {
						node.left = new Node(value);
						return;
					} else if (node.left) {
						return searchTree(node.left);
					}
				} else if (value > node.val) {
					if (!node.right) {
						node.right = new Node(value);
						return;
					} else if (node.right) {
						return searchTree(node.right);
					}
				} else {
					return null;
				}
			};
			return searchTree(current);
		}
	}

	//MIN
	min() {
		let current = this.root;
		while (current.left) {
			current = current.left;
		}
		console.log(current.val);
	}

	//MAX
	max() {
		let current = this.root;
		while (current.right) {
			current = current.right;
		}
		console.log(current.val);
	}

	//IS PRESENT
	present(value) {
		let current = this.root;
		if (current.val === value) return true;
		else {
			const searchTree = (node) => {
				if (value < node.val) {
					if (node.val === value) {
						return true;
					} else if (!node.left) {
						return false;
					} else {
						return searchTree(node.left);
					}
				} else {
					if (node.val === value) {
						return true;
					} else if (!node.right) {
						return false;
					} else {
						return searchTree(node.right);
					}
				}
			};
			return searchTree(current);
		}
	}
}

const tree = new BST();
tree.insert(9);
tree.insert(6);
tree.insert(10);
tree.insert(1);
tree.min();
tree.max();
console.log(tree.present(0));
console.log(tree);
