const strStr = (haystack, needle) => {
	let result = 0,
		len = haystack.length;

	for (let i = 0; i < len; i++) {
		if (haystack.substring(i, i + needle.length) === needle) return i;
	}
	return -1;
};
console.log(strStr('hello', 'll'));
