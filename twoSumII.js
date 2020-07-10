const twoSum = (numbers, target) => {
	// const map = {};
	// for (let i = 0; i < numbers.length; i++) {
	// 	let secondNum = target - numbers[i];
	// 	if (secondNum in map) {
	// 		return [ ++map[secondNum], ++i ];
	// 	} else {
	// 		map[numbers[i]] = i;
	// 	}
	// }

	// TWO POINTER APPROACH
	let pointerOne = 0,
		pointerTwo = numbers.length - 1;

	while (pointerOne < pointerTwo) {
		if (numbers[pointerOne] + numbers[pointerTwo] < target) {
			pointerOne++;
		} else if (numbers[pointerOne] + numbers[pointerTwo] > target) {
			pointerTwo--;
		} else {
			return [ ++pointerOne, ++pointerTwo ];
		}
	}
};

console.log(twoSum([ 2, 7, 11, 15 ], 9));
