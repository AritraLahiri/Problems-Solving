// var isValid = function(s) {   
//     const stack = [];
//     for (let i = 0 ; i < s.length ; i++) {
//         let c = s.charAt(i);
//         switch(c) {
//             case '(': stack.push(')');
//                 break;
//             case '[': stack.push(']');
//                 break;
//             case '{': stack.push('}');
//                 break;
//             default:
//                 if (c !== stack.pop())
//                     return false
//         }
    
//     }
//     return stack.length === 0;
// };
// console.log(isValid("()[]{}"));
var hammingDistance = function(x, y) {
    let res = x ^ y
    let count=0
    res = (res >>> 0).toString(2);
    for (let i = 0; i < res.length; i++){
        if(res[i]==="1") count+=1
    }
    return count
    
    
};
console.log(hammingDistance(1,4));