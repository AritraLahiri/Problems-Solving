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
head.insertNodeAtFirst(4);
head.insertNodeAtFirst(3);
head.insertNodeAtFirst(2);
head.insertNodeAtFirst(1);

var removeNthFromEnd = function(head, n) {
	let fastPointer = head,
		slowPointer = head;

	for (let i = 0; i < n; i++) {
		fastPointer = fastPointer.next;
	}

	if (!fastPointer) {
		return head.next;
	}

	while (fastPointer.next !== null) {
		fastPointer = fastPointer.next;
		slowPointer = slowPointer.next;
	}
	slowPointer.next = slowPointer.next.next;

	return head;
};
console.log(removeNthFromEnd(head.head, 2));
