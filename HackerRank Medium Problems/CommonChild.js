const commonChild = (s1, s2) => {
	s1 = ' ' + s1;
	s2 = ' ' + s2;

	const table = [],
		rows = s2.length,
		columns = rows;

	for (let i = 0; i < rows; i++) {
		table[i] = [];
		for (let j = 0; j < columns; j++) {
			if (i === 0 || j === 0) {
				table[i][j] = 0;
			} else if (s1[i] === s2[j]) {
				table[i][j] = 1 + table[i - 1][j - 1];
			} else {
				table[i][j] = Math.max(table[i - 1][j], table[i][j - 1]);
			}
		}
	}

	return table[rows - 1][columns - 1];
};

console.clear();
console.log(commonChild('FBDAMN', 'ABCDEF'));
