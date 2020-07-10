var majorityElement = function(nums) {
	// Boyer-Moore Voting Algorithm
	// let votes = 0,
	// 	candidate = 0;
	// nums.forEach((element) => {
	// 	if (votes == 0) candidate = element;
	// 	votes += element == candidate ? 1 : -1;
	// });

	// console.log(candidate);

	// let map = {};
	// for (let num of nums) {
	// 	map[num] = (map[num] || 0) + 1;
	// 	if (map[num] > Math.floor(nums.length / 2)) {
	// 		return num;
	// 	}
	// }

	// Sorting Algorithm Takes O(nlogn) time

	const len = nums.length;
	nums.sort((a, b) => a - b);
	return nums[Math.floor(len / 2)];
};
console.log(majorityElement([ 3, 2, 3 ]));
