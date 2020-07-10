var intersect = function(nums1, nums2) {
	const obj = {},
		result = [];

	for (let i of nums1) {
		obj[i] = obj[i] ? obj[i] + 1 : 1;
	}

	for (let j of nums2) {
		if (obj[j]) {
			obj[j]--;
			result.push(j);
		}
	}
	return result;
};
// console.log(intersect([ 1, 2, 2, 1 ], [ 2, 2 ]));

var intersect = function(nums1, nums2) {
	const a1 = nums1.sort((a, b) => a - b),
		a2 = nums2.sort((a, b) => a - b),
		result = [];

	while (a1.length && a2.length) {
		if (a1[0] === a2[0]) {
			result.push(a1.shift());
			a2.shift();
		} else if (a1[0] > a2[0]) {
			a2.shift();
		} else {
			a1.shift();
		}
	}
	return result;
};
console.log(intersect([ 1, 2, 2, 1 ], [ 2, 2 ]));
