const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt')
  .toString()
  .trim()
  .split(' ');

const getDn = (n) => {
  let sum = n;
  n += '';
  for (let i = 0; i < n.length; i++) {
    sum += +n[i];
  }
  return sum;
};

const printAllSelfNumber = (until) => {
  const candidates = Array.from({ length: until }, () => true);
  candidates[0] = false;

  candidates.forEach((val, idx) => {
    const alseIdx = getDn(val);
  });
  const resultArr = [];
  candidates.forEach((val, idx) => val && resultArr.push(idx));

  console.log(resultArr.join('\n'));
};

printAllSelfNumber(10000);
