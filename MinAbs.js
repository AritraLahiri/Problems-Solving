// BruteForce Approach O(n^2)
const minAbs = (arr, n) => {
	const len = n;

	let minDiff = Number.MAX_SAFE_INTEGER;

	for (let i = 0; i < len; i++) {
		for (let j = i + 1; j < n; j++) {
			let currDiff = Math.abs(arr[i] - arr[j]);
			minDiff = currDiff < minDiff ? currDiff : minDiff;
		}
	}

	return minDiff;
};

// Optimal Solution by Sorting O(nlogn)
const minAbs = (arr, n) => {
	arr.sort((a, b) => a - b);

	let minDiff = Number.MAX_SAFE_INTEGER;

	for (let i = 0; i < n - 1; i++) {
		let currDiff = Math.abs(arr[i] - arr[i + 1]);

		minDiff = Math.min(minDiff, currDiff);
	}
	return minDiff;
};
console.clear();
console.log(minAbs([ 3, -7, 0 ], 3));
