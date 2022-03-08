// 알파벳 찾기
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let arr = Array(26).fill(-1);
  for (let i = 0; i < input[0].length; i++) {
    if (arr[input[0][i].charCodeAt() - 97] !== -1) continue;
    arr[input[0][i].charCodeAt() - 97] = i;
  }
  console.log(arr.join(" "));
});
