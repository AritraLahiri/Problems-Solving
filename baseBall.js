var calPoints = function(ops) {
	let stack = [];
	ops.forEach((arr) => {
		if (arr === 'C') {
			stack.pop();
		} else if (arr === 'D') {
			stack.push(2 * stack[stack.length - 1 || 0]);
		} else if (arr === '+') {
			stack.push(stack[stack.length - 1 || 0] + stack[stack.length - 2 || 0]);
		} else {
			stack.push(Number(arr));
		}
	});
	return stack.reduce((acc, val) => acc + val);
};

console.log(calPoints([ '5', '-2', '4', 'C', 'D', '9', '+', '+' ]));
