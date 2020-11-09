const maxSum = (arr, n) => {
	const dp = [];

	if (n === 0) {
		return 0;
	} else if (dp[n]) {
		return dp[n];
	} else {
		return (dp[n] = Math.max(arr[n - 1], maxSum(arr, n - 1)));
	}
};

console.clear();
console.log(maxSum([ 3, 7, 2, 4, 6, 5, 1900 ], 7));
