// 알파벳 개수

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 방법 1
function solution(input) {
  const alphabetIndex = new Array(26).fill(0);
  for (let i = 0; i < input.length; i++) {
    alphabetIndex[input.charCodeAt(i) - 97]++;
  }
  console.log(alphabetIndex.join(" "));
}

// 방법 2
function solution(input) {
  const alphabetIndex = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };

  let answer = "";
  for (let i = 0; i < input.length; i++) {
    alphabetIndex[`${input[i]}`]++;
  }
  for (const key in alphabetIndex) {
    answer = answer + alphabetIndex[key] + " ";
  }
  console.log(answer);
}

solution(input[0]);
