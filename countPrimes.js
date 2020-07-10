const countPrimes = (n) => {
	const nums = [ ...Array(n).keys() ].slice(2);

	for (let i = 0; i < Math.floor(Math.sqrt(n)); i++) {
		if (nums[i]) {
			for (let j = i + nums[i]; j <= n; j += nums[i]) {
				nums[j] = undefined;
			}
		}
	}

	return nums.filter((x) => x).length;
};
console.log(countPrimes(10));

