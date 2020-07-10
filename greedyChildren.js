const findContentChildren = (g, s) => {
	g.sort((a, b) => a - b);
	s.sort((a, b) => a - b);

	let childSatisfied = 0,
		sizeOfCookie = 0;

	while (childSatisfied <= g.length && sizeOfCookie <= s.length) {
		if (g[childSatisfied] <= s[sizeOfCookie]) {
			sizeOfCookie++;
			childSatisfied++;
		} else {
			sizeOfCookie++;
		}
	}
	return childSatisfied;
};

console.log(findContentChildren([ 1, 2 ], [ 1, 2, 3 ]));
