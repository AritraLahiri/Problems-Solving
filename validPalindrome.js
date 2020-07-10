var isPalindrome = function(s) {
	const string = s.replace(/[^\w]|_/g, '').replace(/\s+/g, ' ').toLowerCase();

	let pointer2 = string.length - 1;

	for (let pointer1 = 0; pointer1 < pointer2; pointer1++) {
		if (string[pointer1] === string[pointer2]) {
			pointer2--;
		} else {
			return false;
		}
	}
	return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
