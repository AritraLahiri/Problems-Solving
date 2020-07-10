var rotate = function(matrix) {
	let N = matrix.length;

	for (let row = 0; row < N; row++) {
		for (let column = row; column < N; column++) {
			let temp = matrix[row][column];
			matrix[row][column] = matrix[column][row];
			matrix[column][row] = temp;
		}
		matrix[row].reverse();
	}
	console.log(matrix);
	//USING TWO POINTERS
	// for (let row = 0; row < N; row++) {
	// 	for (let col = 0; col < Math.floor(N / 2); col++) {
	// 		let temp = matrix[row][col];
	// 		matrix[row][col] = matrix[row][N - 1 - col];
	// 		matrix[row][N - 1 - col] = temp;
	// 	}
	// }
};

console.log(rotate([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]));

[ 1, 4, 7 ], [ 2, 5, 8 ], [ 3, 6, 9 ];
