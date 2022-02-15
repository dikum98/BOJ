// 별 찍기 - 5
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 1; i <= input; i++) {
  console.log(" ".repeat(input - i) + "*".repeat(i * 2 - 1));
}
