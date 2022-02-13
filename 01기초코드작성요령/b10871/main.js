// X보다 작은 수

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [inputN, inputX] = input[0].split(" ").map((item) => +item);
const arrayA = input[1].split(" ").map((item) => +item);

console.log(solution(inputN, inputX, arrayA));

function solution(inputN, inputX, arrayA) {
  let answer = arrayA.filter((v) => v < inputX).join(" ");
  return answer;
}
