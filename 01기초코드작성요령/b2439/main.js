// 별 찍기 - 2
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 1; i <= input; i++) {
  let answer = " ".repeat(input - i) + "*".repeat(i);
  console.log(answer);
}
