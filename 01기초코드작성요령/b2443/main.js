// 별 찍기 - 6
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < input; i++) {
  console.log(" ".repeat(i) + "*".repeat(input * 2 - i * 2 - 1));
}
