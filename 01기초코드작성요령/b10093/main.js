// 숫자

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0].split(" ").map((v) => +v);

function printBetweenNumbers(A, B) {
  let numbers = "";
  if (A === B) {
    console.log(0);
    return;
  }
  let small = BigInt(Math.min(A, B));
  let big = BigInt(Math.max(A, B));
  let difference = big - small - BigInt(1);

  console.log("" + difference);
  for (let i = small + BigInt(1); i < big; i++) {
    numbers += `${i} `;
  }
  console.log(numbers.slice(0, -1));
}

printBetweenNumbers(input[0], input[1]);
