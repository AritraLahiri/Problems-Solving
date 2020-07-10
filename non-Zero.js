var getNoZeroIntegers = function (n) {
    let l = 1
    let r = n - 1
    while (String(l).indexOf("0") !== -1 || String(r).indexOf("0") !== -1) {
        l += 1
        r=n-l
    }
    return [l,r]

    
};

console.log(getNoZeroIntegers(11));