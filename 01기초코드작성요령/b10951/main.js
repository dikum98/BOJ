// A + B - 4
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let answer = input.reduce((acc, cur) => {
    return acc + `${+cur[0] + +cur[2]}\n`;
  }, ``);
  console.log(answer);
});
