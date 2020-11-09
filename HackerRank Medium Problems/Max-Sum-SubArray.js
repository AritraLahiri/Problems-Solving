const searchSmallerNumber = (arr, key) => {
	arr.sort((a, b) => a - b);

	let left = 0,
		index = -1,
		right = arr.length - 1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);

		if (arr[mid] > key) {
			index = mid;
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}
	return index;
};

const maximumSum = (a, m) => {
	let maxSumSoFar = a[0],
		maxEndSoFar = 0;

	const previousValues = [];

	for (let i = 0; i < a.length; i++) {
		maxEndSoFar += a[i];
		maxEndSoFar %= m;

		console.log(maxEndSoFar);

		const index = searchSmallerNumber(previousValues, maxEndSoFar);

		if (index > -1) {
			maxSumSoFar = Math.max((previousValues[index] - a[i] + m) % m, maxSumSoFar);
			console.log();
		}

		previousValues.push(maxEndSoFar);
	}

	return maxSumSoFar;
};

console.clear();
console.log(maximumSum([ 3, 3, 9, 9, 5 ], 7));
