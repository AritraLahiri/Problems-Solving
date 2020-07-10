class Node {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

class LinkedList {
	constructor(head) {
		this.head = null;
	}
	insertNode(value) {
		let current = this.head;

		if (!current) {
			this.head = new Node(value);
		} else {
			while (current.next) {
				current = current.next;
			}
			current.next = new Node(value);
		}
	}
}

const LL1 = new LinkedList();
LL1.insertNode(2);
LL1.insertNode(4);
LL1.insertNode(3);

const LL2 = new LinkedList();
LL2.insertNode(5);
LL2.insertNode(6);
LL2.insertNode(4);

// REVERSE THE LINKED LIST ASAP
const reverseLinkedList = (head) => {
	let prev = null;
	while (head) {
		let nextNode = head.next;
		head.next = prev;
		prev = head;
		head = nextNode;
	}
	return prev;
};

const addTwoNumbers = (L1, L2) => {
	let LL1 = reverseLinkedList(L1),
		LL2 = reverseLinkedList(L2);

	const newNode = new LinkedList();

	let current = LL1,
		current2 = LL2;
	let carry = 0;

	while (current || current2) {
		let L1val = current.val ? current.val : 0;
		let L2val = current2.val ? current2.val : 0;

		let currentSum = L1val + L2val + carry;
		carry = Math.floor(currentSum / 10);
		let lastDigit = currentSum % 10;
		newNode.insertNode(lastDigit);

		if (current) current = current.next;
		if (current2) current2 = current2.next;
	}

	if (carry > 0) {
		newNode.insertNode(1);
	}

	return newNode;

	// TRAVERSE THE LINKED LIST
	// TAKE ADDITION , DIVIDE BY 10 , MODULUS BY 10 AND CARRY VARIABLES
	// IF DIVIDE BY 10 != 0 THEN PUT THE RESULT OF DIVIDE BY 10 IN CARRY
};
console.log(addTwoNumbers(LL1.head, LL2.head));
