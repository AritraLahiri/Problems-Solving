const alternatingCharacters = (s) => {
	const len = s.length - 1;
	let deleteCount = 0;

	for (let i = 0; i < len; i++) {
		if (s[i] === s[i + 1]) {
			deleteCount++;
		}
	}
	console.log(deleteCount);
	return deleteCount;
};

console.log(alternatingCharacters('ABABABAB'));
