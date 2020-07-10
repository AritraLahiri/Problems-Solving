var twoSum = function(nums, target) {
	let indices = {};
	const len = nums.length;
	for (let i = 0; i < len; i++) {
		let num = target - nums[i];
		if (num in indices) {
			return [ indices[num], i ];
		} else {
			indices[nums[i]] = i;
		}
	}
};
console.log(twoSum([ -3, 11, 3, 2 ], 0));
