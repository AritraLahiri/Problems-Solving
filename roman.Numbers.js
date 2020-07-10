var romanToInt = function(s) {
	const romanObj = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000
	};
	let num = 0;
	for (let i = 0; i < s.length; i++) {
		romanObj[s[i]] < romanObj[s[i + 1]] ? (num -= romanObj[s[i]]) : (num += romanObj[s[i]]);
	}
	return num;
};

console.log(romanToInt('MCMXCIV'));

const romanObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};
let num = 0;
for (let i = 0; i < s.length; i++) {
    romanObj[s[i]] < romanObj[s[i + 1]] ? (num -= romanObj[s[i]]) : (num += romanObj[s[i]]);
}
return num;