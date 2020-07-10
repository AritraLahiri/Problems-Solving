// var removeDuplicates = function(nums) {
// 	const uniqueValue = [ ...new Set(nums) ];
// 	for (let i = 0; i < uniqueValue.length; i++) {
// 		nums[i] = uniqueValue[i];
// 	}

// 	return uniqueValue.length;
// };
// console.log(removeDuplicates([ 1, 1, 2 ]));

// const removeDuplicates = (nums) => {
// 	let pointer1 = 0;
//     const len = nums.length;

// 	for (let pointer2 = 1; pointer2 < len; pointer2++) {
// 		if (nums[pointer1] !== nums[pointer2]) {
// 			pointer1++;
// 			nums[pointer1] = nums[pointer2];
// 		}
// 	}
// 	return pointer1 + 1;
// };

const removeDuplicates = (nums) => {
	let pointer1 = 0;

	for (let pointer2 = 1; pointer2 < nums.length; pointer2++) {
		if (nums[pointer1] !== nums[pointer2]) {
			nums[pointer1 + 1] = nums[pointer2];
			pointer1++;
		}
	}
	return pointer1 + 1;
};
console.log(removeDuplicates([ 1, 1, 2 ]));
