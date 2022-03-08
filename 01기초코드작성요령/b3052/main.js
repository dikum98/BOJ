// 나머지
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let arr = [];
  let answer = [];
  for (let i = 0; i < 10; i++) {
    arr.push(input[i] % 42);
  }
  arr.forEach((v) => {
    if (!answer.includes(v)) answer.push(v);
  });
  console.log(answer.length);
});
