const makeAnagram = (str1, str2) => {
	const str1Count = [],
		str2Count = [];
	let deleteCount = 0;

	for (let index = 0; index < 26; index++) {
		str1Count[index] = 0;
		str2Count[index] = 0;
	}

	for (let index = 0; index < str1.length; index++) {
		str1Count[str1.charCodeAt(str1.indexOf(str1[index])) - 97] += 1;
	}
	for (let index = 0; index < str2.length; index++) {
		str2Count[str2.charCodeAt(str2.indexOf(str2[index])) - 97] += 1;
	}

	for (let i = 0; i < 26; i++) {
		deleteCount += Math.abs(str1Count[i] - str2Count[i]);
	}
	return deleteCount;
};

console.log(makeAnagram('cde', 'abc'));
