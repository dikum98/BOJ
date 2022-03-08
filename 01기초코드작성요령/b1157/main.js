// 단어 공부
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let arr = Array(26).fill(0);
  let str = input[0].toLowerCase();
  for (let i = 0; i < str.length; i++) {
    arr[str.charCodeAt(i) - 97]++;
  }
  let max = Math.max(...arr);
  let value = arr.indexOf(max) + 65;
  if (arr.filter((v) => v === max).length > 1) return console.log("?");
  else console.log(String.fromCharCode(value));
});
