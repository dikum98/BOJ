// strfry
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let strCount = +input[0].split(" ");

for (let i = 1; i <= strCount; i++) {
  const alphabetArr = Array.from({ length: 26 }, () => 0);
  const [str1, str2] = input[i].split(" ");
  for (let j = 0; j < str1.length; j++) {
    alphabetArr[str1.charCodeAt(j) - 97]++;
    alphabetArr[str2.charCodeAt(j) - 97]--;
  }
  if (alphabetArr.some((v) => v !== 0)) console.log("Impossible");
  else console.log("Possible");
}
