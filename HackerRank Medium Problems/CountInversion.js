const mergeCount = (leftArray, rightArray) => {
	const leftArr = leftArray.slice(),
		outputArr = [],
		rightArr = rightArray.slice();
	let count = 0;

	while (leftArr.length > 0 && rightArr.length > 0) {
		outputArr.push(Math.min(leftArr[0], rightArr[0]));
		if (leftArr[0] > rightArr[0]) {
			count += leftArr.length;
			rightArr.shift();
		} else {
			leftArr.shift();
		}
	}
	const sortedArr = [ ...outputArr, ...leftArr.slice(0, leftArr.length), ...rightArr.slice(0, rightArr.length) ];
	// console.log(count);
	return {
		count: count,
		array: sortedArr
	};
};

const mergeSort = (Arr) => {
	const array = Arr.slice();

	if (array.length < 2) {
		return {
			count: 0,
			array: Arr
		};
	} else {
		const mid = Math.floor(array.length / 2),
			firstArr = array.slice(0, mid),
			secondArr = array.slice(mid);

		let output1 = mergeSort(firstArr),
			output2 = mergeSort(secondArr);

		let result = mergeCount(output1.array, output2.array);
		return {
			count: output1.count + output2.count + result.count,
			array: result.array
		};
	}
};

const inversionCount = mergeSort([ 1, 1, 1, 2, 2 ]);

console.log(inversionCount.count);
