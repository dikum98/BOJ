// 별 찍기 - 8
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 1; i <= input; i++) {
  console.log("*".repeat(i) + " ".repeat(input * 2 - i * 2) + "*".repeat(i));
}

for (let i = input - 1; i > 0; i--) {
  console.log("*".repeat(i) + " ".repeat((input - i) * 2) + "*".repeat(i));
}
