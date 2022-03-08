// 검증수
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let arr = input[0].split(" ");
  console.log(arr.reduce((acc, cur) => acc + cur * cur, 0) % 10);
});
