const validString = (s) => {
	if (s.length < 2) return 'YES';

	const letterCount = [],
		map = {};
	let minAlter = 0,
		maxNumber = 0;

	for (let i = 0; i < 26; i++) {
		letterCount[i] = 0;
	}

	for (let index = 0; index < s.length; index++) {
		letterCount[s.charCodeAt(s.indexOf(s[index])) - 97] += 1;
	}
	console.log(letterCount);

	const filteredArray = letterCount.filter((item) => item !== 0);
	// minNumber = Math.min(...filteredArray);
	// console.log(minNumber);
	console.log(filteredArray);

	filteredArray.forEach((ele) => {
		map[ele] = { count: map[ele] ? (map[ele].count += 1) : 1, no: ele };
	});

	for (let no in map) {
		maxNumber = map[no].count > maxNumber ? map[no].no : maxNumber;
	}
	console.log(maxNumber);

	for (let i = 0; i < letterCount.length; i++) {
		if (letterCount[i] !== maxNumber && letterCount[i] !== 0) {
			console.log(letterCount[i]);
			letterCount[i] -= 1;
			minAlter++;
			if (minAlter > 1) {
				return 'NO';
			}
			if (letterCount[i] === 0) continue;

			if (letterCount[i] !== maxNumber) {
				return 'NO';
			}
		}
	}
	return 'YES';
};

console.clear();
console.log(validString('xxxaabbccrry'));
