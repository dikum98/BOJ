// 평균
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let answer = 0;
  let arr = input[1].split(" ").map((v) => +v);
  let max = Math.max(...arr);
  answer = arr.reduce((acc, cur) => acc + (cur / max) * 100, 0);
  console.log(answer / input[0]);
});
