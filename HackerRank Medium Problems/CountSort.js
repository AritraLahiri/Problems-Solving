const countSort = (arr) => {
	const countArr = [],
		sortedArr = [ ...arr ],
		len = arr.length;
	let max = 0;

	arr.forEach((element) => {
		max = element > max ? element : max;
	});

	for (let i = 0; i < max + 1; i++) {
		countArr[i] = 0;
	}

	for (let i = 0; i < len; i++) {
		countArr[arr[i]] = countArr[[ arr[i] ]] += 1;
	}

	for (let i = 1; i < countArr.length; i++) {
		countArr[i] += countArr[i - 1];
	}

	for (let i = sortedArr.length - 1; i >= 0; i--) {
		sortedArr[countArr[arr[i]] - 1] = arr[i];
		countArr[arr[i]]--;
	}

	// console.log(sortedArr);
	// console.log(countArr);
	return sortedArr;
b};

console.log(countSort([ 2, 1, 1, 0, 2, 5, 4, 0, 2, 8, 7, 7, 9, 2, 0, 1, 9 ]));
