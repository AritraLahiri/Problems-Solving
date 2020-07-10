var longestPalindrome = function(s) {
	let maxSub = '';

	const bubbleFromCenter = (left, right) => {
		while (left >= 0 && right < s.length && s[left] === s[right]) {
			left--;
			right++;
		}
		return s.slice(left + 1, right);
	};

	for (let i = 0; i < s.length; i++) {
		const sub1 = bubbleFromCenter(i, i);
		const sub2 = bubbleFromCenter(i, i + 1);
		const sub = sub1.length > sub2.length ? sub1 : sub2;
		if (sub.length > maxSub.length) {
			maxSub = sub;
		}
	}
	return maxSub;
};
console.log(longestPalindrome('ccc'));

// BRUTE FORCE NAIVE APPROACH
// f(n) =  O(N ^ 3)
const longestPalindrome = (s) => {
	let maxSubstring = '';

	const isPalindrome = (subString) => {
		let palindromeString = '';

		for (let i = subString.length - 1; i >= 0; i--) {
			palindromeString += subString[i];
		}
		return palindromeString === subString ? palindromeString : '';
	};

	for (let i = 0; i < s.length; i++) {
		for (let j = i; j < s.length; j++) {
			const subString = isPalindrome(s.slice(i, j + 1));
			maxSubstring = subString.length > maxSubstring.length ? subString : maxSubstring;
		}
	}
	return maxSubstring;
};

console.log(longestPalindrome('ccc'));
