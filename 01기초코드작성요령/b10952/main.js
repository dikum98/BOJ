// A + B - 5
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let answer = "";
  for (let i = 0; input[i]; i++) {
    answer += `${+input[i][0] + +input[i][2]}\n`;
  }
  console.log(answer.slice(0, -2));
});
