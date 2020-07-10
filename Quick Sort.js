// THE MASTER IS HERE ... THE RECURSION
const quickSort = (Arr, lb = 0, ub = Arr.length - 1) => {
	if (lb >= ub) {
		return;
	}
	let loc = partition(Arr, lb, ub);
	quickSort(Arr, lb, loc - 1);
	quickSort(Arr, loc + 1, ub);
	return Arr;
};

// Partitioning the Array using two Pointers
const partition = (Arr, lb, ub) => {
	let keyEle = Arr[lb],
		pointerOne = lb,
		pointerTwo = ub;

	while (pointerOne <= pointerTwo) {
		if (Arr[pointerOne] <= keyEle) {
			pointerOne++;
		} else if (Arr[pointerTwo] >= keyEle) {
			pointerTwo--;
		} else {
			swap(Arr, pointerOne, pointerTwo);
		}
	}
	swap(Arr, pointerTwo, lb);
	return pointerTwo;
};
// The famous swapping algorithm which swaps two values of an Array
const swap = (Arr, eleOne, eleTwo) => {
	let temp = 0;
	temp = Arr[eleOne];
	Arr[eleOne] = Arr[eleTwo];
	Arr[eleTwo] = temp;
	return Arr;
};
console.log(quickSort([ 1, 9, 10, 222, 0, 6 ]));
