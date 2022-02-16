// 숫자의 개수
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 방법 1
const numCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const multipleValue = "" + input[0] * input[1] * input[2];

for (let i = 0; i < multipleValue.length; i++) {
  numCount[multipleValue[i]]++;
}
for (let i = 0; i < numCount.length; i++) {
  console.log(numCount[i]);
}

// 방법 2
const result = String(input[0] * input[1] * input[2]);

for (let i = 0; i <= 9; i++) {
  console.log(result.split(i).length - 1);
}

// 방법 3
let numStr = input.reduce((a, c) => a * c).toString();
let numArr = new Array(10).fill(0);
while (numStr > 0) {
  numArr[numStr % 10]++;
  numStr = parseInt(numStr / 10, 10);
}
for (let i = 0; i <= 9; i++) {
  console.log(numArr[i]);
}
