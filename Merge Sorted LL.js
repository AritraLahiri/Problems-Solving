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

const head1 = new linkedList();
head1.insertNodeAtFirst(4);
head1.insertNodeAtFirst(2);
head1.insertNodeAtFirst(1);
const head2 = new linkedList();
head2.insertNodeAtFirst(4);
head2.insertNodeAtFirst(3);
head2.insertNodeAtFirst(1);

var mergeTwoLists = function(l1, l2) {
	let mergedHead = { val: -1, next: null },
		current = mergedHead;

	while (l1 && l2) {
		if (l1.val <= l2.val) {
			current.next = l1;
			l1 = l1.next;
		} else {
			current.next = l2;
			l2 = l2.next;
		}
		current = current.next;
	}

	current.next = l1 || l2;

	return mergedHead.next;
};

console.log(mergeTwoLists(head1.head, head2.head));
