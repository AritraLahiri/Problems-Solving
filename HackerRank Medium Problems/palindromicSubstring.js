// Naive Approach  O(n^3)

// const isPalindrome = (s) => {
// 	let pointerOne = 0,
// 		pointerTwo = s.length - 1;
// 	const firstCharac = s[0];

// 	while (pointerOne < pointerTwo) {
// 		if (s[pointerOne] !== firstCharac || s[pointerTwo] !== firstCharac) {
// 			return false;
// 		} else {
// 			pointerOne++;
// 			pointerTwo--;
// 		}
// 	}
// 	// console.log(s);
// 	return true;
// };

// const substrCount = (n, s) => {
// 	let subStringCount = 0;

// 	for (let i = 0; i < n; i++) {
// 		for (let j = i; j < n; j++) {
// 			isPalindrome(s.substring(i, j + 1)) ? (subStringCount += 1) : subStringCount;
// 		}
// 	}

// 	return subStringCount;
// };

// Optimal Approach O(n^2)

const substrCount = (n, s) => {
	let repeat = 0,
		stringCount = n;

	for (let i = 0; i < n; i++) {
		while (i + 1 < n && s[i] === s[i + 1]) {
			repeat++;
			i++;
		}
		stringCount += repeat * (repeat + 1) / 2;
		let pointer = 1;

		while (i + pointer < n && i - pointer >= 0 && s[i + pointer] === s[i - 1] && s[i - pointer] === s[i - 1]) {
			console.log(s[i - 1]);
			pointer++;
			stringCount++;
		}
	}
	return stringCount;
};

console.log(substrCount(7, 'abcbaba'));
