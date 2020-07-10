var longestCommonPrefix = function(strs) {
	let preFix = '';
	if (strs.length) {
		for (let i = 0; i < strs[0].length; i++) {
			preFix += strs.every((ele) => ele[i] === strs[0][i]) ? strs[0][i] : '';
		}
		return preFix;
	}
};

console.log(longestCommonPrefix([ 'flower', 'flow', 'flight' ]));

var longestCommonPrefix = function(strs) {
    
    if(strs.length == 0) {
        return "";
    }
    
    let str = strs[0];
    
    for (const word of strs) {
        while (word.indexOf(str) != 0) {
            str = str.substring(0, str.length - 1);              // remove one character from the end
            if (str === "")
                break;
        }
    }
    return str;
};