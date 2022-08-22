let input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((arr) => arr.split(' ').map((v) => +v));
const C = input.shift();

const getAverage = (N, scores) => scores.reduce((acc, cur) => acc + cur, 0) / N;

const printAverageRatio = (input) => {
  return input.reduce((acc, cur) => {
    const [N, scores] = [cur.shift(), cur];
    acc += ((scores.filter((v) => v > getAverage(N, scores)).length / N) * 100).toFixed(3) + '%\n';
    return acc;
  }, '');
};

console.log(printAverageRatio(input));
