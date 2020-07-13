const maxMin = (k, arr) => {
	let minNumber = Number.MAX_SAFE_INTEGER,
		len = arr.length - 1,
		endIndex = k - 1,
		startIndex = 0;

	arr.sort((a, b) => a - b);

	while (endIndex <= len) {
		minNumber = Math.min(arr[endIndex] - arr[startIndex], minNumber);
		endIndex++;
		startIndex++;
	}

	return minNumber;
};

console.clear();
console.log(maxMin(3, [ 100, 200, 300, 350, 400, 401, 402 ]));
