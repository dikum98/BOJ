// 카드 역배치
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

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

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

let arr = [];
for (let i = 0; i < 20; i++) {
  arr[i] = i + 1;
}
input.forEach((n) => {
  let start = parseInt(n.split(" ")[0] - 1);
  let end = parseInt(n.split(" ")[1]);
  arr = [
    ...arr.slice(0, start),
    ...arr.slice(start, end).reverse(),
    ...arr.slice(end),
  ];
});
console.log(arr.join(" "));
