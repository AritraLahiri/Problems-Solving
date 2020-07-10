const lengthOfLongestSubstring = (s) => {
	let pointerOne = 0,
		pointerTwo = 0,
		max = 0,
		subStrings = new Set();

	while (pointerTwo < s.length) {
		if (!subStrings.has(s[pointerTwo])) {
			subStrings.add(s[pointerTwo]);
			pointerTwo++;
			max = Math.max(subStrings.size, max);
		} else {
			subStrings.delete(s[pointerOne]);
			pointerOne++;
			max = Math.max(subStrings.size, max);
		}
	}
	return max;
};
console.log(lengthOfLongestSubstring('pwwkew'));
