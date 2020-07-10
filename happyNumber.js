var isHappy = function(n) {
	let seen = {};
	while (n !== 1 && !seen[n]) {
		seen[n] = true;
		n = sumofSquares(n);
	}
	return n === 1;

	function sumofSquares(numofString) {
		return numofString.toString().split('').reduce((total, val) => {
			return total + Math.pow(val, 2);
		}, 0);
	}
};
console.log(isHappy(19));
