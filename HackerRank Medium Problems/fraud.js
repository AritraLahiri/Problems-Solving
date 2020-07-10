// #include <iostream>
// #include <stdio.h>
// #include <algorithm>
// #include <queue>
// using namespace std;

// int main(int argc, char const *argv[])
// {
//     int d = 5;
//     int array[9] = {2, 3, 4, 2, 3, 6, 8, 4, 5},
//         index = d - 1,
//         size = sizeof(array) / sizeof(array[0]) - 2;

//     queue<int> myQueue;

//     for (int i = 0; i < d; i++)
//     {
//         myQueue.push(array[i]);
//         cout << "Enqueing" << array[i] << endl;
//     }

//     while (myQueue.back() != array[size])
//     {

//         myQueue.pop();
//         myQueue.push(array[index + 1]);
//         cout << myQueue.back() << endl;
//         index++;
//     }

//     return 0;
// }

const fraudNotification = (expenditure, days) => {
	let index = days - 1,
		size = expenditure.length - 2;

	const array = [];

	for (let i = 0; i < days; i++) {
		array.push(expenditure[i]);
		console.log(array[i]);
	}

	console.log(array[array.length]);
	console.log(expenditure[-1]);

	// while (size !==) {
	// 	array.unshift();
	// 	array.push(expenditure[index + 1]);
	// 	// cout << myQueue.back() << endl;
	// 	console.log(array);
	// 	index++;
	// }

	// return 0;
};

console.log(fraudNotification([ 2, 3, 4, 2, 3, 6, 8, 4, 5 ], 5));
