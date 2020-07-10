const frequencyQueries = (query) => {
	const numbers = {},
		result = [],
		count = {};

	query.forEach(([ operation, data ]) => {
		switch (operation) {
			case 1: //ADD
				numbers[data] = numbers[data] || 0;
				if (numbers[data] > 0) {
					count[numbers[data]] -= 1;
				}

				numbers[data] += 1;
				count[numbers[data]] = (count[numbers[data]] || 0) + 1;
				console.log(numbers);
				console.log(count);
				break;

			case 2: //SUB
				if (numbers[data] > 0) {
					count[numbers[data]] -= 1;
					numbers[data] -= 1;
					count[numbers[data]] = (count[numbers[data]] || 0) + 1;
				}
				break;

			case 3: //FREQUENCY COUNT
				result.push(count[data] > 0 ? 1 : 0);
				break;
		}
	});
	return result;
};

console.log(frequencyQueries([ [ 1, 5 ], [ 1, 6 ], [ 3, 2 ], [ 1, 10 ], [ 1, 10 ], [ 1, 6 ], [ 2, 5 ], [ 3, 2 ] ]));
