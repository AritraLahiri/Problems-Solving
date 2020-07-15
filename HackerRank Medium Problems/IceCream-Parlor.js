const whatFlavors = (cost, money) => {
	const prevCosts = {},
		len = cost.length;

	for (let i = 0; i < len; i++) {
		if (cost[i] <= money) {
			let diff = Math.abs(cost[i] - money);

			if (prevCosts[diff] !== undefined) {
				console.log(prevCosts[diff] + 1, i + 1);
				return;
			} else {
				prevCosts[cost[i]] = i;
			}
		}
	}
};

console.clear();
console.log(whatFlavors([ 2, 2, 4, 3 ], 4));
