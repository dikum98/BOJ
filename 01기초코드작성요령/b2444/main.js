// 별 찍기 - 7
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 1; i <= input; i++) {
  console.log(" ".repeat(input - i) + "*".repeat(i * 2 - 1));
}

for (let i = 0; i < input - 1; i++) {
  console.log(" ".repeat(i + 1) + "*".repeat((input - 1) * 2 - i * 2 - 1));
}
