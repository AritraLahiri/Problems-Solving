var singleNumber = function (nums) {
    // let isNextSame = false
    // nums.sort((a, b) => a - b)
    // for (let i = 0; i < nums.length; i++){
    //     if (isNextSame) {
    //         isNextSame=false
    //     }
    //     else if (nums[i] === nums[i + 1]) {
    //         isNextSame = true
    //     }
    //     else {
    //         return nums[i]
    //     }

    // }

    let num = 0
    nums.forEach(element => {
        num^=element
    });
    return num



    
    
};
console.log(singleNumber([4,1,2,1,2]));