// 개수 세기
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 방법 1
function solution() {
  const N = +input[0];
  const numArr = input[1].split(" ").map((v) => +v);
  const v = +input[2];

  console.log(numArr.filter((item) => item === v).length);
}

// 방법 2 : -100 <= v <= 100, v가 저장된 횟수를 카운트하기 위한 배열 numCount
function solution() {
  const N = +input[0];
  const numArr = input[1].split(" ").map((v) => +v);
  const v = +input[2];

  const numCount = new Array(201).fill(0);
  for (let i = 0; i < N; i++) {
    // 음수도 인덱스로 접근하기 위해 기존 인덱스 +100으로 배열에 저장
    numCount[numArr[i] + 100]++;
  }
  console.log(numCount[v + 100]);
}

solution();
