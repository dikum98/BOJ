const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt')
  .toString()
  .trim()
  .split(' ');

const checkDiff = (input) => {
  const completeProductCount = [1, 1, 2, 2, 2, 8];
  const diffProductCount = completeProductCount.map((item, idx) => item - input[idx]);
  console.log(diffProductCount.join(' '));
};

checkDiff(input);
