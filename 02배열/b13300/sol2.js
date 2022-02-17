// 방 배정
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ");
const students = [
  [0, 0],
  [0, 0], // 1학년
  [0, 0], // 2학년
  [0, 0], // 3학년
  [0, 0], // 4학년
  [0, 0], // 5학년
  [0, 0], // 6학년
  //[여,남]
];

for (let i = 1; i <= +N; i++) {
  const [gender, grade] = input[i].split(" ");
  students[+grade][+gender]++;
}
let roomCount = 0;
students.reduce((_, cur) => {
  roomCount += Math.ceil(cur[0] / +K);
  roomCount += Math.ceil(cur[1] / +K);
}, 0);
console.log(roomCount);
