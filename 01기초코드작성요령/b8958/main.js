// OX퀴즈
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  for (let i = 1; i <= +input[0]; i++) {
    let count = 1;
    let answer = 0;
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === "O") {
        anser += count++;
      } else {
        count = 1;
      }
    }
    console.log(answer);
  }
});
