var getSum = function(a, b) {
	while (b) {
		let carry = a & b;
		a = a ^ b;
		b = carry << 1;
	}
	return a;
};
console.log(getSum(-2, 3));
