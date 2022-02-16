// 방 번호
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const numCount = new Array(10).fill(0);
  let candidate = input.toString();
  for (let i = 0; i < candidate.length; i++) {
    numCount[candidate[i]]++;
  }

  let sixOrNine = Math.ceil((numCount[6] + numCount[9]) / 2);

  console.log(
    Math.max(...numCount.slice(0, 6), ...numCount.slice(7, 9), sixOrNine)
  );
}

solution(input[0]);
