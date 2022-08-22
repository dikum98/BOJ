const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt')
  .toString()
  .trim();

function solution(input) {
  console.log(input + '??!');
}
solution(input);
