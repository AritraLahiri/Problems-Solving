var canJump = function(nums) {
	let lastIndex = nums.length - 1;

	for (let i = nums.length - 2; i >= 0; i--) {
		if (i + nums[i] >= lastIndex) {
			lastIndex = i;
		}
	}
	return lastIndex === 0;
};

console.log(canJump([ 2, 3, 1, 1, 4 ]));
console.log(canJump([ 3, 2, 1, 0, 4 ]));
console.log(canJump([ 3, 0, 8, 2, 0, 0, 1 ]));
