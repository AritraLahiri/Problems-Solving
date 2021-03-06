const array = (arr) => {
	//SWAPING BETWEEN TWO NUMBERS
	const swap = (arr, i, j) => {
		const temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
		return arr;
	};
	//RESETING TO ORIGINAL ARRAY
	const reset = () => arr;
	const n = arr.length;
	//CREATING A COPY OF ORIGINAL ARRAY
	const shuffled = arr.slice();
	//SWAPPING BETWEEN RANDOM NUMBERS
	for (let i = 0; i < n; i++) {
		swap(shuffled, i, Math.floor(Math.random() * n));
	}

	return reset();
};
console.log(array([ 1, 2, 3, 4, 5, 6, 7 ]));

// OOPS APPROACH
var Solution = function(nums) {
	// hold nums in Solution
	this.nums = nums;
};

Solution.prototype.reset = function() {
	return this.nums;
};

Solution.prototype.shuffle = function() {
	// create a copy of this.nums, shuffle it, and return it
	const shuffled = this.nums.slice();
	const n = shuffled.length;
	const swap = (arr, i, j) => {
		let tmp = arr[i];
		arr[i] = arr[j];
		arr[j] = tmp;
	};

	// swap elements with random elements
	for (let i = 0; i < n; i++) swap(shuffled, i, Math.floor(Math.random() * n));

	return shuffled;
};
