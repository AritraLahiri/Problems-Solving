// Naive Approach O(n^2)
// const triplets = (a, b, c) => {
// 	a = [ ...new Set(a) ];
// 	b = [ ...new Set(b) ];
// 	c = [ ...new Set(c) ];

// 	a.sort((a, b) => a - b);
// 	b.sort((a, b) => a - b);
// 	c.sort((a, b) => a - b);

// 	let ArrLeftCount = 0,
// 		ArrRightCount = 0,
// 		totalTriplets = 0;

// 	for (let i = 0; i < b.length; i++) {
// 		for (let j = 0; j < a.length; j++) {
// 			if (a[j] <= b[i]) {
// 				ArrLeftCount++;
// 			} else {
// 				break;
// 			}
// 		}

// 		for (let j = 0; j < c.length; j++) {
// 			if (c[j] <= b[i]) {
// 				ArrRightCount++;
// 			} else {
// 				break;
// 			}
// 		}

// 		totalTriplets += ArrLeftCount * ArrRightCount;
// 		ArrLeftCount = 0;
// 		ArrRightCount = 0;
// 	}

// 	return totalTriplets;
// };

const removeDuplicateAndSort = (arr) => {
	arr = [ ...new Set(arr) ];
	arr.sort((a, b) => a - b);
	return arr;
};

const getIndexByBSearch = (arr, ele) => {
	let index = -1,
		left = 0,
		right = arr.length - 1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);

		if (arr[mid] <= ele) {
			index = mid;
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	return index;
};

const triplets = (a, b, c) => {
	a = removeDuplicateAndSort(a);

	b = removeDuplicateAndSort(b);

	c = removeDuplicateAndSort(c);

	let leftArrayCount = 0,
		len = b.length,
		res = 0,
		rightArrayCount = 0;

	for (let i = 0; i < len; i++) {
		leftArrayCount = getIndexByBSearch(a, b[i]) + 1;
		rightArrayCount = getIndexByBSearch(c, b[i]) + 1;
		res += leftArrayCount * rightArrayCount;
	}
	return res;
};

console.clear();
console.log(triplets([ 1, 4, 5 ], [ 2, 3, 3 ], [ 1, 2, 3 ]));
