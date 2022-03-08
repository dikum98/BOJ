// 단어의 개수
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  if (input[0] === " ") return console.log(0);
  console.log(input[0].trim().split(" ").length);
});
