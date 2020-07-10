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

	// ALL METHOD LOGIC IS DONE BY RECURSION

	insertNode(value) {
		let current = this.root;
		if (!current) {
			this.root = new Node(value);
		} else {
			const traverseTree = (node) => {
				if (value < node.val) {
					if (node.left) {
						return traverseTree(node.left);
					} else {
						node.left = new Node(value);
						return;
					}
				} else {
					if (node.right) {
						return traverseTree(node.right);
					} else {
						node.right = new Node(value);
					}
				}
			};
			return traverseTree(current);
		}
	}

	depthOfTree(root) {
		if (!root) {
			return 0;
		} else {
			return Math.max(this.depthOfTree(root.left), this.depthOfTree(root.right)) + 1;
		}
	}

	validateBST(root, max = null, min = null) {
		if (!root) return true;
		if (min && root.val <= min.val) return false;
		if (max && root.val >= max.val) return false;

		return this.validateBST(root.left, root, min) && this.validateBST(root.right, max, root);
	}
}

const tree = new BST();
tree.insertNode(2);
tree.insertNode(10);
tree.insertNode(100);
tree.insertNode(50);
tree.insertNode(9);
console.log(tree.validateBST(tree.root));
console.log(tree.depthOfTree(tree.root));
console.log(tree);
