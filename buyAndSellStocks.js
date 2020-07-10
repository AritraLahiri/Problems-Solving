var maxProfit = function(prices) {
	let buy = prices[0];

	let len = prices.length,
		profit = 0;
	for (let i = 1; i < len; i++) {
		if (buy > prices[i]) {
			buy = prices[i];
		} else {
			profit = Math.max(prices[i] - buy, profit);
		}
	}
	return profit;
};
console.log(maxProfit([ 7, 1, 5, 3, 6, 4 ]));

// DYNAMIC PROGRAMMING !!
// Part II Question

const maxProfit = (prices) => {
	profit = 0;
	for (let i = 0; i < prices.length; i++) {
		if (prices[i] < prices[i + 1]) profit += prices[i + 1] - prices[i];
	}
	return profit;
};

console.log(maxProfit([ 7, 1, 5, 3, 6, 4 ]));
