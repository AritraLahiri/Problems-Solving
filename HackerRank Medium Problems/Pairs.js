const pairs = (k, arr) => {
	arr.sort((a, b) => a - b);

	const foundSum = {},
		len = arr.length,
		lastValue = arr[len - 1];

	let pairs = 0;

	for (let i = 0; i < len; i++) {
		if (foundSum[arr[i]] === undefined && k + arr[i] <= lastValue) {
			let sum = k + arr[i];
			foundSum[sum] = i;
		} else if (foundSum[arr[i]] !== undefined) {
			let sum = k + arr[i];
			foundSum[sum] = i;
			pairs++;
		}
	}

	return pairs;
};

console.clear();
console.log(pairs(2, [ 1, 5, 3, 4, 2 ]));
