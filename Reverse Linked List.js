class Node {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

class linkedList {
	constructor() {
		this.head = null;
	}

	insertNodeAtFirst(data) {
		this.head = new Node(data, this.head);
	}
}

const head = new linkedList();
head.insertNodeAtFirst(5);
head.insertNodeAtFirst(4);
head.insertNodeAtFirst(3);
head.insertNodeAtFirst(2);
head.insertNodeAtFirst(1);

//Time Complexity: O(n), Linear - traverse linked list only once
//Space Complexity: O(1), Constant - we will only have 2 pointers regardless of size of input; prev and temp
var reverseList = function(head) {
	// End of the reversed linked list set to null
	let prev = null;

	// Traverse through the given linked list
	while (head) {
		const nextNode = head.next; // References the next Node of given linked list
		head.next = prev; // head.next point to previous Node, instead of the next Node of the given linked list
		prev = head; // Move the prev Node pointer up to head
		head = nextNode; // Move the head up to next Node of the given linked list
	}

	// Prev is the reversed linked list
	return prev;
};

console.log(reverseList(head.head));
