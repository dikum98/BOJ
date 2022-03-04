// 스택
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const dat = [];
let pos = 0;
let answer = "";
function push(val) {
  dat[pos++] = val;
}
function pop() {
  pos--;
}
function top() {
  return dat[pos - 1];
}

function solution() {
  let cmdCount = +input[0];

  for (let i = 1; i <= cmdCount; i++) {
    let cmd = input[i].split(" ")[0].trim();
    let val = +input[i].split(" ")[1];
    switch (cmd) {
      case "push":
        push(val);
        break;
      case "pop":
        if (pos === 0) {
          answer += `-1\n`;
        } else {
          answer += `${top()}\n`;
          pop();
        }
        break;
      case "size":
        answer += `${pos}\n`;
        break;
      case "empty":
        pos === 0 ? (answer += `1\n`) : (answer += `0\n`);
        break;
      default:
        if (pos === 0) answer += `-1\n`;
        else answer += `${top()}\n`;
    }
  }
  console.log(answer.slice(0, -1));
}
solution();
