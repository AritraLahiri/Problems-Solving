const getMinimumCost = (groupMembers, totalFlowers) => {
	totalFlowers.sort((a, b) => b - a);

	let firstPurchase = groupMembers,
		getMinimumCost = 0,
		allMembersTurn = 0,
		totalPreviousPurchases = 1;

	for (let i = 0; i < totalFlowers.length; i++) {
		if (firstPurchase === 0) {
			getMinimumCost += (totalPreviousPurchases + 1) * totalFlowers[i];
			allMembersTurn++;
			if (allMembersTurn === groupMembers) {
				totalPreviousPurchases++;
				allMembersTurn = 0;
			}
		} else {
			getMinimumCost += totalFlowers[i];
			firstPurchase--;
		}
	}
	return getMinimumCost;
};

console.clear();
console.log(getMinimumCost(3, [ 1, 2, 3, 4 ]));
