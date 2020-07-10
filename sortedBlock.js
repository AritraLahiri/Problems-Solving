// const blocks = (s) => {
// 	let res = [];
// 	const keyArr = [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'];
// 	const keyObj = [...s].reduce((x, next, i) => (x[next] = (x[next] || 0) + 1, x), {})
// 	console.log(keyObj);
// 	while (keyArr.some((x) => keyObj[x] > 0)) {
// 		if (res.length>0) res.push("-")
// 		for (let j = 0; j < keyArr.length; j++) {
// 			if (keyObj[keyArr[j]] > 0) {
// 				res.push(keyArr[j]);
// 				keyObj[keyArr[j]]--;
// 			}
// 		}
// 	}

// 	return res.join("")

// 	let res = [];

// 	const keyArr = [ ...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' ];
// 	const keyObj = [ ...s ].reduce((x, next) => ((x[next] = (x[next] || 0) + 1), x), {});

// 	while (keyArr.some((x) => keyObj[x] > 0)) {
// 		if (res.length) res.push('-');
// 		for (let i = 0; i < keyArr.length; i++) {
// 			if (keyObj[keyArr[i]] > 0) {
// 				res.push(keyArr[i]);
// 				keyObj[keyArr[i]]--;
// 			}
// 		}
// 	}

// 	return res.join('');

// 	console.log(keyArr);
// 	console.log(keyObj);
// };

// console.log(blocks('RsJDmzPWYTKTqM'));

// const borrow = (s) => {
// 	return s.toLowerCase().replace(/\W/g, '');
// };
// console.log(borrow('WhAt! FiCK! DaMn CAke?'));

// const wordsToMarks = (string) => {
// 	let strArr = [ ...'abcdefghijklmnopqrstuvwxyz' ].reduce((x, ele, i) => ((x[ele] = i + 1), x), {});
// 	return [ ...string ].reduce((x, ele, i) => x + strArr[ele], 0);
// };
// console.log(wordsToMarks('friends'));

// function meeting(s) {
// 	// your code
// 	let string = s.toUpperCase().split(';').map((x) => x.split(':').reverse().join(',')).sort().join(")(")
// 	return "(" +string + ")"

// }

// console.log(
// 	meeting('Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill')
// );

var twoSum = (nums, target) => {
	let res = [];
	let index = {};
	let length = nums.length;
	for (let i = 0; i < length; i++) {
		let remainder = target - nums[i];
		if (remainder in index) {
			res.push(index[remainder]);
			res.push(i);
			return res;
		}
		index[nums[i]] = i;
	}
	return res;
};

console.log(twoSum([ 3, 2, 3 ], 6));
