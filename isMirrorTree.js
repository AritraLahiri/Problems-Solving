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
		} else {
			const searchTree = (node) => {
				if (value < node.val) {
					if (node.left) {
						return searchTree(node.left);
					} else {
						node.left = new Node(value);
						return;
					}
				} else {
					if (node.right) {
						return searchTree(node.right);
					} else {
						node.right = new Node(value);
					}
				}
			};
			return searchTree(current);
		}
	}

	isSymmetric(root) {
		let current = root;
		console.log(root);
		return this.isMirror(current, current);
	}
	isMirror(left, right) {
		if (left === null || right === null) {
			return left === right;
		} else if (left.val !== right.val) {
			return false;
		} else {
			return this.isMirror(left.left, right.right) && this.isMirror(left.right, right.left);
		}
	}
}

const Tree = new BST();
Tree.insert(1);
Tree.insert(2);
Tree.insert(2);
Tree.insert(3);
Tree.insert(4);
Tree.insert(4);
Tree.insert(3);

console.log(Tree.isSymmetric(Tree.root));
console.log(Tree);
