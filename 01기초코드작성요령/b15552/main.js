// 빠른 A+B
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  let answer = "";
  for (let i = 1; i <= input[0]; i++) {
    answer =
      answer + (+input[i].split(" ")[0] + +input[i].split(" ")[1]) + "\n";
  }
  console.log(answer);
}

solution(input);
