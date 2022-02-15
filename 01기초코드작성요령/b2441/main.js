// 별 찍기 - 4
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let stars = new Array(+input[0]).fill("*");
for (let i = 0; i < input; i++) {
  console.log(stars.join(""));
  stars[i] = " ";
}
