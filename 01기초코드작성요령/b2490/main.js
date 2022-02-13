// 윷놀이

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let inputA = input[0].split(" ").map((v) => +v);
let inputB = input[1].split(" ").map((v) => +v);
let inputC = input[2].split(" ").map((v) => +v);

function solution() {
  checkInput(inputA);
  checkInput(inputB);
  checkInput(inputC);
}

// function checkInput(input) {
//   let backCount = 0;
//   input.forEach((v) => (backCount += v));
//   const backCountName = {
//     0: "D",
//     1: "C",
//     2: "B",
//     3: "A",
//     4: "E",
//   };
//   console.log(backCountName[`${backCount}`]);
// }

// function checkInput(input) {
//   let backCount = 0;
//   input.forEach((v) => (backCount += v));
//   switch (backCount) {
//     case 0:
//       console.log("D");
//       break;
//     case 1:
//       console.log("C");
//       break;
//     case 2:
//       console.log("B");
//       break;
//     case 3:
//       console.log("A");
//       break;
//     case 4:
//       console.log("E");
//   }
// }

function checkInput(input) {
  let backCount = 0;
  const backCountName = "DCBAE";
  backCount = input.reduce((acc, cur) => acc + cur, 0);
  console.log(backCountName[backCount]);
}

solution();
