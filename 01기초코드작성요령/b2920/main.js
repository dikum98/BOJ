// 음계
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  if (input[0] === "1 2 3 4 5 6 7 8") console.log("ascending");
  else if (input[0] === "8 7 6 5 4 3 2 1") console.log("descending");
  else console.log("mixed");
});
