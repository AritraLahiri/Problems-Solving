class Stack {
	constructor() {
		this.storage = {};
		this.size = 0;
	}
	push(val) {
		this.storage[this.size] = val;
		this.size++;
	}
	pop() {
		let top = this.storage[this.size - 1];
		delete this.storage[this.size];
		this.size--;
		return top;
	}
	peek() {
		return this.storage[this.size - 1];
	}
	empty() {
		return this.getSize() === 0;
	}
	getSize() {
		return this.size;
	}
}

const MinStack = () => {
	this.stack = new Stack();
	this.MinStack = new Stack();
};

MinStack.prototype.push = (x) => {
	this.stack.push(x);

	if (this.MinStack.empty()) this.MinStack.push(s);
	else if (x < this.MinStack.peek) this.MinStack.push(x);
};
MinStack.prototype.pop = () => {
	let removed = this.stack.pop();
	if (removed === this.MinStack.peek()) this.MinStack.pop();
};

MinStack.prototype.top = () => {
	return this.stack.peek();
};
MinStack.prototype.min = () => {
	return this.MinStack.peek();
};

let myStack = new Stack();
myStack.push(6);
console.log('Popped Out', myStack.pop());
myStack.push(9);
myStack.push('a');
console.log('top', myStack.peek());
