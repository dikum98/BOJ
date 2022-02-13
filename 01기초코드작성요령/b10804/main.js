// 카드 역배치
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input.map((v) => v.split(" ").map((v) => +v));

function solution(input) {
  let candidate = new Array(20).fill(0);
  for (let i = 0; i < 20; i++) {
    candidate[i] = i + 1;
  }

  // 10번 반복
  for (let i = 0; i < input.length; i++) {
    // 각 회차
    let count = Math.floor((input[i][1] - input[i][0] + 1) / 2);
    let leftHand = input[i][0] - 1;
    let rightHand = input[i][1] - 1;
    while (count--) {
      [candidate[leftHand], candidate[rightHand]] = [
        candidate[rightHand],
        candidate[leftHand],
      ];
      leftHand++;
      rightHand--;
    }
  }

  console.log(candidate.join(" "));
}

solution(input);
