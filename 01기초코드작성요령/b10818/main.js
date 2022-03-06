// 최소, 최대
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const numArr = [...input[1].split(" ")].map((v) => +v);
  let min = 1000001;
  let max = -1000001;
  for (let i = 0; i < numArr.length; i++) {
    min = min > numArr[i] ? numArr[i] : min;
    max = max < numArr[i] ? numArr[i] : max;
  }
  console.log(min, max);
});
