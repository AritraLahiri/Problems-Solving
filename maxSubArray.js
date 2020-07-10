const maxSubArray = (nums) => {
	// Kadane's Algorithm O(n)time-complexity

	let maxCurrent = nums[0];
	let maxGlobal = nums[0];

	for (let i = 1; i < nums.length; i++) {
		maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
        if (maxCurrent > maxGlobal) maxGlobal = maxCurrent;
    }
    return maxGlobal;
};

console.log(maxSubArray([ -2, 1, -3, 4, -1, 2, 1, -5, 4 ]));


const maxSubArray = (nums) => {
	// Dynamic Programming

	for (let i = 1; i < nums.length; i++) {
		nums[i] = Math.max(nums[i], nums[i] + nums[i-1]);
	}
	return Math.max(...nums);
};

console.log(maxSubArray([ -2, 1, -3, 4, -1, 2, 1, -5, 4 ]));
