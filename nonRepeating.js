var firstUniqChar = function(s) {
	let map = {};

	for (let char of s) {
		map[char] ? map[char]++ : (map[char] = 1);
	}

	for (let i = 0; i < s.length; i++) {
		if (map[s[i]] === 1) return i;
	}
	return -1;

	// const arr = Array.from(s)
	// const len= arr.length
	// for (let i = 0; i < len; i++){
	//     if (arr.slice(i + 1).indexOf(arr[i]) === -1 && arr.slice(0,i).indexOf(arr[i])=== -1)
	//         return i
	// }
	// return -1
};
console.log(firstUniqChar(''));
