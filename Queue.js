class Queue {
	constructor() {
		this.queue = [];
	}
	enqueue(value) {
		this.queue.push(value);
	}
	dequeue() {
		const deletedValue = this.queue.shift();
		console.log(`And ${deletedValue} is deleted !`);
		return deletedValue;
	}
	printQueue() {
		this.queue.map((val) => console.log(val));
	}
	isEmpty() {
		return this.queue.length <= 0;
	}
	length() {
		return this.queue.length;
	}
}
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
	//LEVEL WISE TRAVERSAL OF TREE
	levelWise(node) {
		// ITERATIVE APPROACH
		const queue = new Queue();
		let result = [];
		queue.enqueue(node);

		while (!queue.isEmpty()) {
			let row = [];
			let rowSize = queue.length();
			while (rowSize > 0) {
				let currentNode = queue.dequeue();

				if (currentNode.left) {
					queue.enqueue(currentNode.left);
				}
				if (currentNode.right) {
					queue.enqueue(currentNode.right);
				}
				row.push(currentNode.val);
				rowSize--;
			}
			result.push(row);
		}
		console.log(result);
	}
}
// const queue = new Queue();
// queue.enqueue(12);
// queue.enqueue(32);
// queue.enqueue(42);
// queue.enqueue(52);
// queue.dequeue();

// queue.printQueue();

const tree = new BST();
tree.insert(10);
tree.insert(9);
tree.insert(12);
tree.insert(2);
tree.levelWise(tree.root);
