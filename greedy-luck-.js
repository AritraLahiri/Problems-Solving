const luckBalance = (k, contests) => {
	const importantContestLucks = [],
		len = contests.length;

	let maxLuckCount = 0;

	for (let i = 0; i < len; i++) {
		if (contests[i][1] === 0) {
			maxLuckCount += contests[i][0];
		} else {
			importantContestLucks.push(contests[i][0]);
		}
	}

	importantContestLucks.sort((a, b) => b - a);

	for (let i = 0; i < importantContestLucks.length; i++) {
		if (i < k) {
			maxLuckCount += importantContestLucks[i];
		} else {
			maxLuckCount -= importantContestLucks[i];
		}
	}

	return maxLuckCount;
};

console.log(luckBalance(3, [ [ 5, 1 ], [ 2, 1 ], [ 1, 1 ], [ 8, 1 ], [ 10, 0 ], [ 5, 0 ] ]));
