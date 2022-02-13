// 핸드폰 요금

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = input[0].split(" ").map((item) => +item)[0];
const arrayN = input[1].split(" ").map((item) => +item);

function solution(arrayN) {
  let feeY = 0;
  let feeM = 0;
  arrayN.forEach((v) => {
    feeY += parseInt(v / 30 + 1, 10) * 10;
    feeM += parseInt(v / 60 + 1, 10) * 15;
  });
  if (feeY === feeM) {
    return console.log(`Y M ${feeY}`);
  }
  if (feeY > feeM) {
    console.log(`M ${feeM}`);
  } else {
    console.log(`Y ${feeY}`);
  }
}

solution(arrayN);
