// 두 수의 합
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 방법 1
// x 이하의 자연수 중 numArr에 존재하는 수를 마킹, x에서 i번째 요소를 뺀 값이 0인 인덱스가 마킹되어 있으면 1 카운팅
function solution() {
  const n = +input[0];
  const numArr = input[1].split(" ").map((v) => +v);
  const x = +input[2];
  const numCount = new Array(x + 1).fill(0);
  let answer = 0;
  for (let i = 0; i < n; i++) {
    numCount[numArr[i]]++;
    if (numArr[i] * 2 === x) continue;
    if (numCount[x - numArr[i]]) answer++;
  }
  console.log(answer);
}

// 방법 2
// x의 최대값인 200만 이하를 마킹할 수 있는 배열을 저장, numArr의 길이의 절반동안 합이 x가 되는 서로 다른 자연수 i, x-i를 탐색
function solution() {
  const n = +input[0];
  const numArr = input[1].split(" ").map((v) => +v);
  const x = +input[2];
  const numCount = new Array(2000001).fill(0);
  let answer = 0;
  for (let i = 0; i < n; i++) {
    numCount[numArr[i]]++;
  }
  for (let i = 1; i < Math.ceil(x / 2); i++) {
    if (numCount[i] && numCount[x - i]) answer++;
  }

  console.log(answer);
}

solution();
