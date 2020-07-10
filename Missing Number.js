const Missing = (nums) => {
	let sum1 = 0,
		sum2 = 0,
		len = nums.length;

	for (let i = 0; i < len; i++) {
		sum1 += i + 1;
		sum2 += nums[i];
	}
	return sum1 - sum2;
};

console.log(Missing([ 0, 1, 3 ]));
