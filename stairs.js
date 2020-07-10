const drawStairs = n => {
  let str = "";
  for (let i = 1; i <= n; i++) {
    if (n == 1) {
      return "I";
    } else if (i == n) {
      str += "I";
    } else {
      str += "I\n" + " ".repeat(i);
    }
  }
  return str;
};
console.log(drawStairs(3));
