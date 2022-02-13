// 세수정렬

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0].split(" ").map((v) => +v);

// 132ms 9596kb
function sort(array) {
  let sortedArray = array.sort((a, b) => a - b);
  console.log(sortedArray.join(" "));
}

// 156ms 9616kb
function sort(array) {
  let a = Math.max(...array);
  let b = Math.min(...array);
  let c = array[0] + array[1] + array[2] - a - b;
  console.log(b, c, a);
}

sort(input);
