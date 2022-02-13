// 주사위 세개

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0].split(" ").map((v) => +v);

// function computeReward(input) {
//   if (input[0] === input[1] && input[1] === input[2]) {
//     console.log(10000 + input[0] * 1000);
//   } else if (input[0] === input[1] || input[0] === input[2]) {
//     console.log(1000 + input[0] * 100);
//   } else if (input[1] === input[2]) {
//     console.log(1000 + input[1] * 100);
//   } else {
//     console.log(Math.max(...input) * 100);
//   }
// }

function computeReward(input) {
  const diceEyes = new Array(7).fill(0);
  let maxCount = 0;
  let maxEye = 0;
  let biggestNum = 0;
  input.forEach((eye) => {
    biggestNum = Math.max(eye, biggestNum);
    diceEyes[eye]++;
    if (maxCount < diceEyes[eye]) {
      maxCount = diceEyes[eye];
      maxEye = eye;
    }
  });
  if (maxCount === 3) console.log(10000 + maxEye * 1000);
  else if (maxCount === 2) console.log(1000 + maxEye * 100);
  else console.log(biggestNum * 100);
}

computeReward(input);
