const merge = (leftArr, rightArr) => {
	let output = [],
		leftIndex = 0,
		swapCount = 0,
		rightIndex = 0;

	while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
		const leftEle = leftArr[leftIndex];
		const rightEle = rightArr[rightIndex];
		if (leftEle <= rightEle) {
			output.push(leftEle);
			leftIndex++;
		} else {
			swapCount += leftArr.length - leftIndex;
			output.push(rightEle);
			rightIndex++;
		}
	}
	// console.log(swapCount);
	return [ ...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex) ];
};
const mergeSort = (Arr) => {
	// let inversions = 0;
	if (Arr.length <= 1) {
		return Arr;
	} else {
		const mid = Math.floor(Arr.length / 2);
		const leftArray = Arr.slice(0, mid);
		const rightArray = Arr.slice(mid);
		// mergeSort(leftArray);
		// mergeSort(rightArray);
		return merge(mergeSort(leftArray), mergeSort(rightArray));
	}
};

console.log(mergeSort([ 7, 5, 3, 1 ]));
