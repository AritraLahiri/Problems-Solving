const reverse = (x) => {
	const string = parseInt(Math.abs(x).toString().split('').reverse().join(''));
	const reverse = x < 0 ? '-' + string : string;
	return reverse > 2 ** 31 || reverse < -(2 ** 31) ? 0 : reverse;
};
console.log(reverse(901000));
