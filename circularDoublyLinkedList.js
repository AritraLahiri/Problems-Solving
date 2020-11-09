class Node {
	// CREATING A NODE FOR THE DOUBLY CIRCULAR LINKED LIST
	constructor(data, next = null, prev = null) {
		this.data = data;
		this.next = next;
		this.prev = prev;
	}
}

class LinkedList {
	// CREATING LINKED LISTS AND THEIR INSERTION METHODS
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	// INSERTING ELEMENT AT THE BEGINNING OF THE LINKED LIST
	insertNode(val) {
		const newNode = new Node(val, this.head, null);

		this.head = newNode;
		this.size++;

		if (newNode.next) {
			newNode.next.prev = newNode;
		} else {
			this.tail = newNode;
		}
		this.head.prev = this.tail;
		this.tail.next = this.head;
	}

	// REMOVING ELEMENT  FROM THE LINKED LIST
	removeNode(val) {
		let current = this.head;

		while (current !== this.tail) {
			if (current.data === val || current.next.data === val) {
				// DELEING FIRST NODE OF LINKED LIST
				if (current.prev === this.tail) {
					this.head = current.next;
					current.next.prev = this.tail;
					current.next = null;

					// DELEING LAST NODE OF LINKED LIST
				} else if (current.next === this.tail) {
					this.tail = current.next.prev;
					current.next = null;
					this.tail.next = this.head;

					// DELEING INTERMIDIATE NODE OF LINKED LIST
				} else {
					current.next.prev = current.prev;
					current.prev.next = current.next;
				}
				break;
			} else {
				current = current.next;
			}
		}
	}

	findLastNode() {
		console.log(`The Tail is : ${this.tail.data}`);
	}

	// STORING ALL THE VALUES INSERTED IN LINKED LIST TO AN ARRAY SO THAT
	// IT CAN BE USED LATER
	storeData() {
		let current = this.head;
		const allValues = [];

		while (current !== this.tail) {
			allValues.push(current.data);
			current = current.next;
		}
		allValues.push(current.data);
		return allValues;
	}
}

// TEST CASES FOR LINKED LIST INSERTIONS
const ll = new LinkedList();
console.clear();
ll.insertNode(3);
ll.insertNode(2);
ll.insertNode(3);

// FUNCTION TO COPY UNIQUE VALUES FROM LINKED LIST TO AN ARRAY
const copyUniqueValues = (myData) => {
	// HERE I'M LOOPING THROUGH ALL THE VALUES FROM LINKED LIST FROM THE STOREDATA
	// METHOD AND STORING IT IN AN MAP DATA-STRUCTURE. Example : [3,2,3]

	// 1. THEN I'M STORING THE KEY AND VALUE SAME AS THAT OF THE VALUE OF THE LINKED LIST TO THE MAP like {"3":3 ,"2":2, "3":3}.

	// 2. AFTER THAT I'M REMOVING ALL THE DUPLICATES BY CHECKING IF ITS ALREADY PRESENT IN THE MAP-DS IF
	// NOT THEN STORE IN THE MAP. {"3":3,"2":2}.

	// 3. AFTER THAT I'M LOOPING THROUGH MY MAP AND PUSHING ALL THE UNIQUE VALUES INTO THE ARRAY AND
	// RETURING THE UNIQUE VALUES FROM THE LINKED LIST THEREOF. [2,3]

	// Time Complexity : Here's the time taken by the program is O(n) since we are looping through all the elements in the linkedlist.
	//Space Conplexity:  Here's the external space taken is also O(n) since stores all the values in Linked list.

	const allUniqueValues = [];
	const map = {};

	myData.forEach((value) => {
		if (!map[value]) {
			map[value] = value;
		}
	});

	for (let values in map) {
		allUniqueValues.push(map[values]);
	}

	return allUniqueValues;
};
console.log(copyUniqueValues(ll.storeData()));
