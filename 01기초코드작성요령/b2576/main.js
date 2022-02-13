// 홀수

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input
  .join(" ")
  .split(" ")
  .map((v) => +v);

function pickOddNums(input) {
  return input.filter((v) => v % 2);
}

function sumNums(array) {
  return array.reduce((a, c) => a + c, 0);
}

function findSmallest(array) {
  return Math.min(...array);
}

function solution() {
  if (pickOddNums(input).length === 0) {
    console.log(-1);
    return;
  }
  console.log(sumNums(pickOddNums(input)));
  console.log(findSmallest(pickOddNums(input)));
}

solution();

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

function pickOddNums(input) {
  let oddNums = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 === 1) {
      oddNums = oddNums.concat(input[i]);
    }
  }
  return oddNums;
}

function sumNums(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += pickOddNums(input)[i];
  }
  return sum;
}

function findSmallest(array) {
  let smallest = 0;
  smallest = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallest) smallest = array[i];
  }
  return smallest;
}

function solution() {
  if (pickOddNums(input).length === 0) return console.log(-1);

  console.log(sumNums(pickOddNums(input)));
  console.log(findSmallest(pickOddNums(input)));
}

solution();

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

function solution(input) {
  let sum = 0;
  let odds = [];

  input.forEach((v) => {
    if (v % 2 === 1) {
      sum += v;
      odds = odds.concat(v);
    }
  });

  odds.sort((a, b) => a - b);
  if (sum === 0) {
    console.log(-1);
  } else {
    console.log(sum);
    console.log(odds[0]);
  }
}

solution(input);
