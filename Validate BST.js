class Node {
	constructor(value, left = null, right = null) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

class BST {
	constructor() {
		this.root = null;
	}

	insert(val) {
		let current = this.root;
		if (!current) {
			this.root = new Node(val);
		} else {
			const searchTree = (node) => {
				if (val < node.value) {
					if (node.left) {
						return searchTree(node.left);
					} else {
						node.left = new Node(val);
						return;
					}
				} else if (val > node.value) {
					if (node.right) {
						return searchTree(node.right);
					} else {
						node.right = new Node(val);
						return;
					}
				} else {
					return null;
				}
			};
			return searchTree(current);
		}
	}

	isPresent(val) {
		let current = this.root;
		if (val === current.value) return true;
		else {
			const searchTree = (node) => {
				if (val < node.value) {
					if (val === node.value) {
						return true;
					} else if (node.left) {
						return searchTree(node.left);
					} else {
						return false;
					}
				} else {
					if (val === node.value) {
						return true;
					} else if (node.right) {
						return searchTree(node.right);
					} else {
						return false;
					}
				}
			};
			return searchTree(current);
		}
	}

	validateTree() {
		// let current = this.root;
		// const isValidBST = (root, min = null, max = null) => {
		// 	if (!root) return true;
		// 	if (min && root.value <= min.value) return false;
		// 	if (max && root.value >= max.value) return false;
		// 	return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
		// };
		// return isValidBST(current);

		let current = this.root;
		const validateTree = (current, min = null, max = null) => {
			if (!current) return true;
			if (min && root.value <= min) return false;
			if (max && root.value >= max) return false;

			return validateTree(root.left, min, root) && validateTree(root.right, root, max);
		};

		return validateTree(current);
	}

	maxDepth() {
		const current = this.root;
		const searchTree = (node) => {
			if (!node) return 0;
			else {
				return Math.max(searchTree(node.left), searchTree(node.right)) + 1;
			}
		};
		return searchTree(current);
	}

	preOrderTraversal() {
		// ROOT -> LEFT -> RIGHT
		console.log(`preOrder Traversal of the BST is Here `);
		let current = this.root;
		const traverseTree = (node) => {
			while (node) {
				console.log(node.value);
				return traverseTree(node.left), traverseTree(node.right);
			}
		};
		return traverseTree(current);
	}

	inOrderTraversal() {
		// LEFT -> ROOT -> RIGHT
		console.log(`inOrder Traversal of the BST is Here `);
		let current = this.root;
		const traverseTree = (node) => {
			while (node) {
				return traverseTree(node.left), console.log(node.value), traverseTree(node.right);
			}
		};
		return traverseTree(current);
	}
	postOrderTraversal() {
		// LEFT->RIGHT->ROOT
		console.log(`postOrder Traversal of the BST is Here `);
		let current = this.root;
		const traverseTree = (node) => {
			while (node) {
				return traverseTree(node.left), traverseTree(node.right), console.log(node.value);
			}
		};
		return traverseTree(current);
	}
}

const tree = new BST();
tree.insert(90);
tree.insert(100);
tree.insert(10);
tree.insert(13);
// console.log('Node is :', tree.isPresent(33));
// console.log(`Max Depth of BST is : ${tree.maxDepth()}`);
// tree.preOrderTraversal();
// tree.inOrderTraversal();
// tree.postOrderTraversal();
console.log(tree.validateTree());

console.log(tree);
