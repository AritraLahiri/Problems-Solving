const anagrams = (s) => {
    const len = s.length;
	let res = 0;

	for (let i = 1; i < len; i++) {
        const subString = {}
        for (let j = 0; j < len - i + 1; j++) {
            
            subString[s.substring(j, j + i)] =  subString


            console.log(s.substring(j, j + i));
		}
	}
};

console.log(anagrams('mom'));
