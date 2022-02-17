// 방 배정
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution() {
  const N = +input[0].split(" ")[0]; // 학생 수
  const K = +input[0].split(" ")[1]; // 한 방당 최대 인원 수
  let roomCount = 0;
  input.splice(0, 1);

  // 성별로 나누기
  const femaleGroup = input.filter((v) => +v.split(" ")[0] === 0);
  const maleGroup = input.filter((v) => +v.split(" ")[0] === 1);

  // 학년으로 나누기
  const femaleGrade = [0, 0, 0, 0, 0, 0, 0];
  const maleGrade = [0, 0, 0, 0, 0, 0, 0];

  // 여학생 학년별 명 수 체크
  for (let i = 0; i < femaleGroup.length; i++) {
    femaleGrade[+femaleGroup[i].split(" ")[1]]++;
  }
  // 여학생 학년별 방 배정
  femaleGrade.forEach((v) => {
    if (!v) return;
    if (v <= K) roomCount++;
    else {
      roomCount = roomCount + Math.floor(v / K);
      if (v % K) roomCount++;
    }
  });

  // 남학생 학년별 명 수 채크
  for (let i = 0; i < maleGroup.length; i++) {
    maleGrade[+maleGroup[i].split(" ")[1]]++;
  }
  // 남학생 학년별 방 배정
  maleGrade.forEach((v) => {
    if (!v) return;
    if (v <= K) roomCount++;
    else {
      roomCount = roomCount + Math.floor(v / K);
      if (v % K) roomCount++;
    }
  });
  console.log(roomCount);
}

solution();
