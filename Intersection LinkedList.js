class Node {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertNode(value) {
		if (!this.head) {
			this.head = new Node(value);
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = new Node(value);
		}
	}
}

const node1 = new LinkedList();
node1.insertNode(4);
node1.insertNode(1);

const node2 = new LinkedList();
node2.insertNode(5);
node2.insertNode(0);
node2.insertNode(1);

const node3 = new LinkedList();
node3.insertNode(8);
node3.insertNode(4);
node3.insertNode(5);

const intersectLL = (L1, L2, L3) => {
	let current = L1;
	while (current.next) {
		current = current.next;
	}
	current.next = L3;

	let L2Current = L2;

	while (L2Current.next) {
		L2Current = L2Current.next;
	}
	L2Current.next = L3;

	let currentNode = L1;
	while (currentNode) {
		console.log(currentNode.val);
		currentNode = currentNode.next;
	}
};

intersectLL(node1.head, node2.head, node3.head);

var getIntersectionNode = function(headA, headB) {
	if (headA == null || headB == null) return null;

	let currentNodeA = headA,
		currentNodeB = headB;

	while (currentNodeA !== currentNodeB) {
		if (!currentNodeA) {
			currentNodeA = headB;
		} else {
			currentNodeA = currentNodeA.next;
		}
		if (!currentNodeB) {
			currentNodeB = headA;
		} else {
			currentNodeB = currentNodeB.next;
		}
	}
	return currentNodeA;
};

// console.log('Linked List No-1\n', node1);
// console.log('Linked List No-2\n', node2);
// console.log('Linked List No-3\n', node3);
