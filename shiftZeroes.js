var moveZeroes = function(nums) {
	// USING POINTERS
	let pos = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			nums[pos++] = nums[i];
		}
	}
	for (let i = pos; i < nums.length; i++) {
		nums[i] = 0;
	}
};
console.log(moveZeroes([ 0, 1, 0, 3, 12 ]));

var lengthOfLongestSubstring = function(s) {
	let subString = '';
	for (let i = 0; i < s.length - 1; i++) {
		if (s[i] !== s[i + 1] && subString.indexOf(s[i]) === -1) {
			subString += s[i];
			subString += s[i + 1];
		} else {
			console.log(subString);
			subString = '';
		}
	}
};
console.log(lengthOfLongestSubstring('pwwkew'));
