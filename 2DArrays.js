// HAKERRANK INTERVIEW KIT ARRAY PROBLEMS LISTS

// const twoDarrays = (arr) => {
// 	let rows = arr.length,
// 		columns = arr[0].length,
// 		maxHourGlassSum = -63;

// 	for (let i = 0; i < rows - 2; i++) {
// 		for (let j = 0; j < columns - 2; j++) {
// 			let hourGlassSum =
// 				arr[i][j] +
// 				arr[i][j + 1] +
// 				arr[i][j + 2] +
// 				arr[i + 1][j + 1] +
// 				arr[i + 2][j] +
// 				arr[i + 2][j + 1] +
// 				arr[i + 2][j + 2];

// 			maxHourGlassSum = Math.max(maxHourGlassSum, hourGlassSum);
// 		}
// 	}
// 	return maxHourGlassSum;
// };

// console.log(
// 	twoDarrays([
// 		[ 1, 1, 1, 0, 0, 0 ],

// 		[ 0, 1, 0, 0, 0, 0 ],

// 		[ 1, 1, 1, 0, 0, 0 ],

// 		[ 0, 0, 2, 4, 4, 0 ],

// 		[ 0, 0, 0, 2, 0, 0 ],

// 		[ 0, 0, 1, 2, 4, 0 ]
// 	])
// );

// const leftRotation = (arr, noOfRot) => {
// O(N^2) APRROACH

//     while (noOfRot) {
// 		for (let i = 0; i < arr.length - 1; i++) {
// 			if (i === 0) {
// 				temp = arr[i];
// 				arr[i] = arr[arr.length - 1];
// 				arr[arr.length - 1] = temp;
// 			} else {
// 				temp = arr[i];
// 				arr[i] = arr[i - 1];
// 				arr[i - 1] = temp;
// 			}
// 		}
// 		noOfRot--;
// 	}
// 	return arr;
// };

// 	const newArray = [],
// 		len = arr.length;

// 	for (let i = 0; i < len; i++) {
// 		let oldIndex = (i + noOfRot) % len;
// 		newArray[i] = arr[oldIndex];
// 	}
// 	return newArray;
// };

// console.log(leftRotation([ 1, 2, 3, 4, 5 ], 4));

// const minimumBribes = (q) => {
// 	const swap = (arr, firstIndex, secondIndex) => {
// 		let temp = arr[firstIndex];
// 		arr[firstIndex] = arr[secondIndex];
// 		arr[secondIndex] = temp;
// 		return arr;
// 	};

// 	const len = q.length - 1;
// 	let swapCount = 0;

// 	for (let i = len; i >= 0; i--) {
// 		if (q[i] !== i + 1) {
// 			if (i - 1 >= 0 && q[i - 1] === i + 1) {
// 				swap(q, i, i - 1);
// 				swapCount++;
// 			} else if (i - 2 >= 0 && q[i - 2] === i + 1) {
// 				swap(q, i - 2, i - 1);
// 				swap(q, i, i - 1);
// 				swapCount++;
// 				swapCount++;
// 			} else {
// 				console.log('Too chaotic');
// 				return;
// 			}
// 		}
// 	}
// 	return swapCount;
// };
// console.log(minimumBribes([ 2, 1, 5, 3, 4 ]));

// const minimumSwaps = (arr) => {
// 	const len = arr.length - 1;
// 	let swapCount = 0;

// 	const swap = (arr, firstIndex, secondIndex) => {
// 		let temp = arr[firstIndex];
// 		arr[firstIndex] = arr[secondIndex];
// 		arr[secondIndex] = temp;
// 		return arr;
// 	};

// 	for (let i = len; i >= 0; i--) {
// 		if (arr[i] !== i + 1) {
// 			let initialIndex = arr.indexOf(i + 1);
// 			swap(arr, i, initialIndex);
// 			swapCount++;
// 		}
// 	}
// 	return swapCount;
// };

// console.log(minimumSwaps([ 2, 3, 4, 1, 5 ]));

// const arrayManipulation = (n, queries) => {
// 	const resultArray = [];
// 	let maxValue = 0;

// 	for (let i = 0; i <= n; i++) {
// 		resultArray[i] = 0;
// 	}

// 	for (let query = 0; query < queries.length; query++) {
// 		let firstIndex = queries[query][0],
// 			secondIndex = queries[query][1],
// 			operand = queries[query][2];

// 		resultArray[firstIndex] = resultArray[firstIndex] ? (resultArray[firstIndex] += operand) : operand;
// 		if (secondIndex + 1 <= n) {
// 			resultArray[secondIndex + 1] = resultArray[secondIndex + 1]
// 				? (resultArray[secondIndex + 1] -= operand)
// 				: -operand;
// 		}
// 	}
// 	for (let i = 1; i < resultArray.length; i++) {
// 		resultArray[i] += resultArray[i - 1];
// 		if (resultArray[i] > maxValue) maxValue = resultArray[i];
// 	}
// 	console.log(maxValue);
// };
// console.log(arrayManipulation(10, [ [ 1, 5, 3 ], [ 4, 8, 7 ], [ 6, 9, 1 ] ]));

// const sherlockAnagrams = (s) => {
// 	const len = s.length;

// 	for (let i = 0; i < len; i++) {
// 		for (let k = 0; k < len - i; k++) {
// 			console.log(s.slice(k, k + i));
// 		}
// 	}
// };

// console.log(sherlockAnagrams('abba'));


