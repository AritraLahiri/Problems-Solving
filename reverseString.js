var reverseString = (s) => {
	// for (let [a, b] = [0, s.length - 1]; a < b; a++, b--) {
	//     [s[a], s[b]] = [s[b], s[a]]
	// }

	let len = s.length,
		pointer2 = len - 1;

	for (let pointer1 = 0; pointer1 < len; pointer1++) {
		if (pointer1 < pointer2) {
			let temp = s[pointer1];
			s[pointer1] = s[pointer2];
			s[pointer2] = temp;
			pointer2--;
		}
	}
	return s;
};

console.log(reverseString([ 'H', 'a', 'n', 'n', 'a', 'h' ]));
