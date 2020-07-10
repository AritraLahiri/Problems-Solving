const jumpClouds = (clouds) => {
	let jumps = 0,
		i = 0;
	len = clouds.length - 1;
	while (i < len) {
		if (clouds[i + 2] === 1) {
			jumps++;
			i++;
		} else {
			jumps += 2;
			i += 2;
		}
	}
	return jumps;
};
console.log(jumpClouds([ 0, 0, 0, 1, 0, 0 ]));

const repeatString = (s, n) => {
	let lenOfString = s.length,
		remainder = n % lenOfString,
		add = 0,
		noOfA = 0,
		remainingString = s.slice(0, remainder);

	for (let i = 0; i < s.length; i++) {
		if (s[i] === 'a') {
			noOfA++;
		}
	}
	for (let i = 0; i < remainingString.length; i++) {
		if (s[i] === 'a') {
			add++;
		}
	}

	return noOfA * Math.floor(n / lenOfString) + add;
};
console.log(repeatString('gfcaaaecbg', 547602));

const countValleys = (n, s) => {
	let altitude = 0,
		noOfValleys = 0;
	for (let i = 0; i < n; i++) {
		if (s[i] === 'U') {
			if (altitude < 0) {
				noOfValleys++;
			}
			altitude++;
		}
		if (s[i] === 'D') {
			altitude--;
		}
	}
	return noOfValleys;
};

function sockMerchant(n, ar) {
	let pairs = 0;

	ar.sort((a, b) => a - b);

	for (let i = 0; i < n - 1; i++) {
		if (ar[i] === ar[i + 1]) {
			pairs++;
			i++;
		}
	}
	return pairs;
}
console.log(sockMerchant(9, [ 10, 20, 20, 10, 10, 30, 50, 10, 20 ]));
