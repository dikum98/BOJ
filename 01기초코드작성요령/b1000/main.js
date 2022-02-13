// A + B

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0].split(" ").map((v) => +v);

// function solution(a, b) {
//   console.log(a + b);
// }

// solution(input[0], input[1]);

console.log(input[0] + input[1]);
