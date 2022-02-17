// strfry
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const strCount = +input[0].split(" ");

for (let i = 1; i <= strCount; i++) {
  let [str1, str2] = input[i].split(" ");
  str1 = str1.split("").sort();
  str2 = str2.split("").sort();
  if (str2.indexOf("\r") >= 0) {
    str2.splice(str2.indexOf("\r"), 1);
  }
  let result = str1.every((v, i) => v === str2[i]);
  if (result) console.log("Possible");
  else console.log("Impossible");
}

let a = { k: 1, h: 2, length: 2 };
let b = Array.from(a);
console.log(b);
