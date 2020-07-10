class Node {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

class LinkedList {
	constructor(pos = -1) {
		this.head = null;
		this.pos = pos;
	}

	insertFirst(data) {
		this.head = new Node(data, this.head);
		this.pos++;
	}

	insertCycle(index) {
		let current = this.head;
		while (current) {
			current = current.next;
			console.log(current);
		}
	}

	printValue() {
		let current = this.head;
		while (current) {
			console.log(current.val);
			current = current.next;
		}
	}
}

const LL = new LinkedList();
LL.insertFirst(2);
LL.insertFirst(6);
LL.insertFirst(5);
LL.insertFirst(1);
// LL.printValue();
LL.insertCycle(1);

var hasCycle = function(head) {
	let fast = head,
		slow = head;

	while (slow && fast && fast.next) {
		fast = fast.next.next;
		slow = slow.next;

		if (fast === slow) return true;
	}
	return false;
};
console.log(hasCycle());
