//NOT COMPLETED YET INCOMPLETE
var myAtoi = function(str) {
	if (str > 2 ** 31 - 1) return 2 ** 31 - 1;
	if (str < 2 ** 31 * -1) return 2 ** 31 * -1;
	let result = '',
		symbol = '',
		string = str.replace(/\s+/g, '');

	for (let s of string) {
		if (s !== ' ' && !isNaN(s)) {
			result += s;
		} else if (s === '-' || s === '+') {
			symbol += s;
		} else {
			return !result.length ? 0 : symbol + result;
		}
	}

	return !result.length || symbol.length > result.length ? 0 : symbol + result;

	var myAtoi = function(str) {
		let i = 0;
		let sign = 1;
		let res = 0;
		while (str.charAt(i) == ' ') {
			i++;
		}
		if (str.charAt(i) === '+') {
			i++;
		} else if (str.charAt(i) === '-') {
			sign = -1;
			i++;
		}

		while (str.charAt(i) >= '0' && str.charAt(i) <= '9') {
			res = res * 10 + (str.charAt(i) - 0);
			if (res * sign >= 2147483647) {
				return 2147483647;
			} else if (res * sign <= -2147483648) {
				return -2147483648;
			}
			i++;
		}
		return res * sign;
	};
};
console.log(myAtoi('-4193 with words'));
console.log(myAtoi('42'));
console.log(myAtoi('+'));
console.log(myAtoi('    -42'));
console.log(myAtoi('words and 987'));
console.log(myAtoi('-91283472332'));
console.log(myAtoi('+-2'));
