// 대표값2

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input
  .join(" ")
  .split(" ")
  .map((v) => +v);

function solution(input) {
  let mean = 0;
  let median = 0;
  mean = input.reduce((a, c) => a + c, 0) / 5;
  median = input.sort((a, b) => a - b)[2];
  console.log(mean);
  console.log(median);
}

solution(input);
