// 별 찍기 - 1
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let stars = "";
for (let i = 1; i <= input; i++) {
  console.log((stars += "*"));
}
