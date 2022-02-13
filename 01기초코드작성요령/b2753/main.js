// 윤년

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0].split(" ").map((v) => +v);

function checkLeapYear(input) {
  if (input % 4 === 0 && (input % 100 !== 0 || input % 400 === 0))
    return console.log(1);
  return console.log(0);
}

checkLeapYear(input);
