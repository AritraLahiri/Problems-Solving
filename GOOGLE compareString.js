const compareStrings = (stringA, stringB) => {
	//Finding the min Character in each subString
	const minChar = (string) => {
		let minChar = 'z';

		for (let char of string) {
			if (char < minChar && char !== ' ') {
				minChar = char;
			}
		}
		return minChar;
	};

	//Finding no of times min Character occurs in each subsctring and then taking their max value
	const findFrequency = (minChar, stringArr) => {
		let maxFrequency = 0;

		for (let subStr of stringArr) {
			let maxCharCount = 0;
			for (let char of subStr) {
				if (minChar === char) {
					maxFrequency = Math.max(maxFrequency, ++maxCharCount);
				}
			}
		}
		return maxFrequency;
	};

	//Driver Function
	let minCharac = minChar(stringB),
		result = [],
		stringArrA = stringA.split(' ');
	stringArrB = stringB.split(' ');
	(maxFrequencyofStringA = findFrequency(minCharac, stringArrA)),
		(maxFrequencyofStringB = findFrequency(minCharac, stringArrB));

	result.push(maxFrequencyofStringA);
	result.push(maxFrequencyofStringB);
	return result.sort((a, b) => b - a);
};
console.log(compareStrings('abcd aabc bd', 'aaa aa'));
