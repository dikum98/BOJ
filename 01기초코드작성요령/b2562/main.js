// 최댓값
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input.map((v) => +v);

console.log(
  Math.max(...input) + "\n" + (input.indexOf(Math.max(...input)) + 1)
);
