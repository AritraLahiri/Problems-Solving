const countTriplets = (array, r) => {
	const rightMap = {},
		leftMap = {};
	let sum = 0,
		leftElement = 0,
		rightElement = 0;

	array.forEach((element) => {
		rightMap[element] = rightMap[element] ? (rightMap[element] += 1) : 1;
	});

	array.forEach((current) => {
		rightMap[current] -= 1;
		if (leftMap[current / r] && current % r === 0) {
			leftElement = leftMap[current / r];
		}
		if (rightMap[current * r]) {
			rightElement = rightMap[current * r];
		}
		leftMap[current] = leftMap[current] ? (leftMap[current] += 1) : 1;
		sum += leftElement * rightElement;
		leftElement = 0;
		rightElement = 0;
	});

	return sum;
};

console.log(countTriplets([ 1, 5, 5, 25, 125 ], 5));
