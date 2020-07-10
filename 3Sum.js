// var threeSum = function(nums) {
// 	let [ solution, left, right ] = [ [], 0, nums.length - 1 ];
// 	nums.sort((a, b) => a - b); //[-4,-1,-1,0,1,2]

// 	for (let [ index, number ] of nums.entries()) {
// 		if (number > 0) return solution;

// 		if (number === nums[index - 1]) continue; //[-,1,-1,]

// 		left = index + 1; //-1
// 		right = nums.length - 1; //2

// 		while (left < right) {
// 			let temp = number + nums[left] + nums[right]; //-1 + -1 + 2
// 			if (temp === 0) {
// 				solution.push([ number, nums[left], nums[right] ]);
// 				left++;
// 				right--;
// 				while (left < right && nums[left] === nums[left - 1]) {
// 					left++;
// 				}
// 				while (left < right && nums[right] === nums[right + 1]) {
// 					right--;
// 				}
// 			} else if (temp > 0) {
// 				right--;
// 			} else if (temp < 0) {
// 				left++;
// 			}
// 		}
// 	}
// 	return solution;
// };
// console.log(threeSum([ -1, 0, 1, 2, -1, -4 ]));

const threeSum = (nums) => {
	[ solution, left, right ] = [ [], 0, nums.length - 1 ];
	nums.sort((a, b) => a - b);
	

	for (let [ index, val ] of nums.entries()) {
		if (val > 0) return solution;
		if (val === nums[index - 1]) continue;
		right = nums.length - 1;
		left = index + 1;

		while (left < right) {
			let temp = nums[left] + nums[right] + val;
			if (temp === 0) {
				solution.push([ val, nums[left], nums[right] ]);
				left++;
				right--;

				while (left < right && nums[left] === nums[left - 1]) {
					left++;
				}
				while (left < right && nums[right] === nums[right + 1]) {
					right--;
				}
			} else if (temp < 0) {
				left++;
			} else if (temp > 0) {
				right--;
			}
		}
	}
	return solution
};
console.log(threeSum([ -1, 0, 1]));
