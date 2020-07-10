// ASKED BY GOOGLE
var licenseKeyFormatting = function(S, K) {
	let formattedStrings = [],
		stringLength = 0;

	for (let i = S.length - 1; i >= 0; i--) {
		if (S[i] !== '-' && stringLength < K) {
			formattedStrings.push(S[i].toUpperCase());
			stringLength++;
		} else if (S[i] !== '-' && stringLength >= K) {
			formattedStrings.push('-');
			formattedStrings.push(S[i].toUpperCase());
			stringLength = 1;
		}
	}
	formattedStrings.reverse();
	return formattedStrings.join('');
};
console.log(licenseKeyFormatting('2-5g-3-J', 2));
