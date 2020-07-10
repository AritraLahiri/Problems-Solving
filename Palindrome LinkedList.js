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

	insertFirst(data) {
		this.head = new Node(data, this.head);
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
LL.insertFirst(1);
LL.insertFirst(2);
LL.insertFirst(2);
LL.insertFirst(1);
// LL.printValue();

//NAIVE APPROACH BY ME
// var isPalindrome = function(head) {
// 	let current = head,
// 		currentRev = head,
// 		prev = null,
// 		val1 = [],
// 		index = 0;

// 	while (current) {
// 		val1.push(current.val);
// 		current = current.next;
// 	}

// 	while (currentRev) {
// 		let nextNode = currentRev.next;
// 		currentRev.next = prev;
// 		prev = currentRev;
// 		currentRev = nextNode;
// 	}

// 	while (prev) {
// 		if (val1[index] !== prev.val) return false;
// 		prev = prev.next;
// 		index++;
// 	}
// 	return true;
// };

//ADVANCE APPROACH USING TWO POINTERS

var isPalindrome = function(head) {
	let fast = head,
		slow = head;

	while (fast.next != null && fast.next.next != null) {
		fast = fast.next.next;
		slow = slow.next;
	}

	slow.next = reverse(slow.next);
	slow = slow.next;

	while (slow) {
		if (head.val !== slow.val) return false;
		head = head.next;
		slow = slow.next;
	}
	return true;
};

const reverse = (head) => {
	let prev = null;
	while (head) {
		let nextNode = head.next;
		head.next = prev;
		prev = head;
		head = nextNode;
	}
	return prev;
};

console.log(isPalindrome(LL.head));
