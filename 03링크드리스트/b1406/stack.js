// 에디터 (스택 풀이)
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const leftStack = input[0].trim().split("");
const rightStack = [];
let cmdCount = +input[1];

function solution() {
  for (let i = 2; i < 2 + cmdCount; i++) {
    let [cmd, value] = input[i].split(" ");
    if (cmd[0] === "L" && leftStack.length !== 0) {
      rightStack.push(leftStack.pop());
    } else if (cmd[0] === "D" && rightStack.length !== 0) {
      leftStack.push(rightStack.pop());
    } else if (cmd[0] === "B" && leftStack.length !== 0) {
      leftStack.pop();
    } else if (cmd[0] === "P") {
      leftStack.push(value[0]);
    }
  }
  let result = [...leftStack, ...rightStack.reverse()].join("");
  console.log(result);
}
solution();
