class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

//FIRST SINGLE ALONE NODE CREATED !
const node = new Node(600);

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	//INSERT FIRST  NODE
	insertFirst(data) {
		this.head = new Node(data, this.head);
		this.size++;
	}

	//INSERT LAST  NODE
	insertLast(data) {
		let current;
		let node = new Node(data);
		if (!this.head) {
			this.head = node;
		} else {
			current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = node;
		}
		this.size++;
	}

	//INSERT AT INDEX
	insertAtIndex(data, index) {
		//Checking if index is out of range
		if (index < 0 || index > this.size) {
			return;
		}

		//If index is 0 It'll be the head immediately
		if (index === 0) {
			this.head = new Node(data, this.head);
		} else {
			let previous,
				node = new Node(data),
				count = 0,
				current = this.head;

			while (count < index) {
				previous = current;
				current = current.next;
				count++;
			}

			previous.next = node;
			node.next = current;
			this.size++;
		}
	}

	//GET AT INDEX
	getAtIndex(index) {
		if (index < 0 || index > this.size) return;
		else {
			let current = this.head,
				count = 0;
			while (count < index) {
				current = current.next;
				count++;
			}
			console.log(`Element at index ${index} is this  ${current.data}`);
		}
	}

	//REMOVE AT INDEX
	removeAtIndex(index) {
		if ((index < 0 && index > this.size) || this.size === 0) return;

		if (index === 0) {
			let current = this.head;
			this.head = current.next;
		} else {
			let previous,
				count = 0,
				current = this.head;

			while (count < index) {
				previous = current;
				current = current.next;
				count++;
			}
			previous.next = current.next;
		}
	}

	//CLEAR
	clearList() {
		this.head = null;
	}

	//PRINT LIST DATA
	printData() {
		let current = this.head;
		while (current) {
			console.log(current.data);
			current = current.next;
		}
	}
}

const ll = new LinkedList();
ll.clearList();
ll.insertFirst(22);
ll.insertLast(990);
ll.insertFirst(68);
ll.insertFirst(99);
ll.insertAtIndex(192, 1);
// ll.removeAtIndex(0);
ll.getAtIndex(2);
ll.printData();

// //CREATING A DAMN NODE
// class Node {
// 	constructor(data, next = null) {
// 		//Data holds the value
// 		//Next contains the next Node in it
// 		this.data = data;
// 		this.next = next;
// 	}
// }

// //NOW CREATING A LINK LIST  UP HERE

// class LinkedList {
// 	constructor() {
// 		this.head = null;
// 		this.size = 0;
// 	}

// 	//CREATING A INSERT AT FIRST INDEX METHOD
// 	insertFirst(data) {
// 		this.head = new Node(data, this.head);
// 		this.size++;
// 	}

// 	//INSERTING AT THE VERY LAST INDEX METHOD
// 	insertLast(data) {
// 		let current = this.head,
// 			node = new Node(data);

// 		if (!this.head) {
// 			this.head = node;
// 		} else {
// 			while (current.next) {
// 				current = current.next;
// 			}
// 			current.next = node;
// 		}
// 		this.size++;
// 	}

// 	//PRINT ALL NODE VALUES METHOD
// 	printData() {
// 		let current = this.head;
// 		while (current) {
// 			console.log(current.data);
// 			current = current.next;
// 		}
// 	}
// }

// const ll = new LinkedList();
// ll.insertFirst(123);
// ll.insertLast(10);
// ll.insertFirst(163);
// ll.insertFirst(100);
// ll.insertFirst(900);
// ll.printData();
