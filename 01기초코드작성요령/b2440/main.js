// 별 찍기 - 3
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// let stars = "";
// for (let i = 0; i < input; i++) {
//   stars += "*";
// }

// for (let i = input; i > 0; i--) {
//   console.log(stars.slice(0, i));
// }

for (let i = input; i > 0; i--) {
  console.log("*".repeat(i));
}
