var isValidSudoku = function(board) {
	const map = {};

	for (let row = 0; row < 9; row++) {
		for (let column = 0; column < 9; column++) {
			const val = board[row][column];

			if (val === '.') continue;

			const keyRow = `row ${row} has value ${val}`;
			const keyColumn = `col ${column} has value ${val}`;
			const keyBox = `box ${Math.floor(row / 3)}-${Math.floor(column / 3)} has ${val}`;

			if (map[keyRow] || map[keyColumn] || map[keyBox]) return false;

			map[keyRow] = true;
			map[keyColumn] = true;
			map[keyBox] = true;
		}
	}
	return true;
};

console.log(
	isValidSudoku([
		[ '5', '3', '.', '.', '7', '.', '.', '.', '.' ],
		[ '6', '.', '.', '1', '9', '5', '.', '.', '.' ],
		[ '.', '9', '8', '.', '.', '.', '.', '6', '.' ],
		[ '8', '.', '.', '.', '6', '.', '.', '.', '3' ],
		[ '4', '.', '.', '8', '.', '3', '.', '.', '1' ],
		[ '7', '.', '.', '.', '2', '.', '.', '.', '6' ],
		[ '.', '6', '.', '.', '.', '.', '2', '8', '.' ],
		[ '.', '.', '.', '4', '1', '9', '.', '.', '5' ],
		[ '.', '.', '.', '.', '8', '.', '.', '7', '9' ]
	])
);
