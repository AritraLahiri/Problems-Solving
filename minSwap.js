var minSwap = function(A, B) {
	let len = A.length,
		swapCount = 0;

	for (let i = 0; i < len; i++) {
		if (A[i] > A[i + 1] || B[i] > B[i + 1]) {
			let temp = A[i + 1];
			A[i + 1] = B[i + 1];
			B[i + 1] = temp;
			swapCount++;
		}
	}
	// console.log(A);
	// console.log(B);
	return swapCount;
};

console.log(minSwap([ 1, 3, 5, 4 ], [ 1, 2, 3, 7 ]));
