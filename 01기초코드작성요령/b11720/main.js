// 숫자의 합
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
  for (let i = 0; i < +input[0]; i++) {
    answer += +input[1][i];
  }
  console.log(answer);
});
