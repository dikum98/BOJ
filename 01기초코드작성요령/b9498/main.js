// 시험 성적

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// input에 trim() 안 해주니까 틀림: 불필요한 공백이 있음.
function printGrade(score) {
  if (0 <= score && score <= 100) {
    switch (Math.floor(score / 10)) {
      case 10:
      case 9:
        console.log("A");
        break;
      case 8:
        console.log("B");
        break;
      case 7:
        console.log("C");
        break;
      case 6:
        console.log("D");
        break;
      default:
        console.log("F");
        break;
    }
  }
}

printGrade(+input);
