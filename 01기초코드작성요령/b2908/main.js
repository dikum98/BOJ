// 상수
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let arr = input[0].split(" ").map((v) => v.split("").reverse().join(""));
  console.log(Math.max(...arr));
});
