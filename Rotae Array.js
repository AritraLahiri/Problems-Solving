var rotate = function(nums, k) {
	// let len = nums.length,
	// 	secondHalf = nums.slice(len - k).reverse();

    // for ([index, number] of secondHalf.entries()) {
	// 	nums.unshift(number);
	// 	nums.pop();
	// }
    // console.log(nums);


    for (let i = 0; i < k; i++){
        nums.unshift(nums.pop())
    }
    return nums
    




};
console.log(rotate([ 1, 2, 3, 4, 5, 6, 7 ], 3));
