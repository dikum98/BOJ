// 일곱 난쟁이

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input
  .join(" ")
  .split(" ")
  .map((v) => +v);

function solution(input) {
  let find = false;
  let sum = input.reduce((a, b) => a + b, 0);
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - input[i] - input[j] === 100) {
        find = true;
        input.splice(i, 1);
        input.splice(j - 1, 1);
        break;
      }
    }
    if (find) break;
  }
  input.sort((a, b) => a - b);
  for (let i = 0; i < 7; i++) {
    console.log(input[i]);
  }
}

solution(input);
