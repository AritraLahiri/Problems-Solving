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
		let curr = this.head;

		if (!this.head) {
			this.head = new Node(value);
		} else {
			while (curr.next) {
				curr = curr.next;
			}
			curr.next = new Node(value);
		}
	}

	lengthOfLL(pos) {
		let curr = this.head,
			pointerOne = 0,
			nthLength = 0,
			temp,
			length = 0;
		while (curr) {
			pointerOne++;
			if (curr.val === pos) {
				temp = pointerOne;
				nthLength = temp;
			}
			length++;
			curr = curr.next;
		}
		return length - nthLength;
	}
}
const LL = new LinkedList();
LL.insertNode(1);
LL.insertNode(2);
LL.insertNode(3);
LL.insertNode(4);
LL.insertNode(5);
console.log(LL.lengthOfLL(3));
console.log(LL);
