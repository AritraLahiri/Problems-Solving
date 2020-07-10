var isAnagram = function(s, t) {
	if (s.length !== t.length) return false;

	let letterCount = {};
	for (let letter of s) {
		letterCount[letter] = (letterCount[letter] || 0) + 1;
	}

	for (let letter of t) {
		if (letterCount[letter] === undefined || letterCount[letter] < 1) return false;
		else {
			letterCount[letter]--;
		}
	}
	return true;
};
console.log(isAnagram('aacc', 'ccac'));
