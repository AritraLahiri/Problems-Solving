var trailingZeroes = function(n) {
	let trailingZeroes = 0;
	while (n >= 5) {
		trailingZeroes += Math.floor(n / 5);
		n = n / 5;
	}
	return trailingZeroes;
};
console.log(trailingZeroes(30));
