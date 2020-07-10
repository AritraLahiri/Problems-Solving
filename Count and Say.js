const countAndSay = (n) => {
	let start = '1',
		result = '',
		count = 1;

	for (let i = 0; i < n - 1; i++) {
		for (let j = 0; j < start.length; j++) {
			if (start[j] !== start[j + 1] || j === start.length - 1) {
				result += count + start[j];
				count = 1;
			} else {
				count++;
			}
		}

		start = result;
		result = '';
	}
	return start;
};
console.log(countAndSay(4));
