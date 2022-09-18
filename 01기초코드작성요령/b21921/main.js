// 블로그 (슬라이딩 윈도우)
const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt')
  .toString()
  .split('\n');

const checkDays = input[0].split(' ')[1];
const dayVisitors = input[1].split(' ').map((v) => +v);

if (dayVisitors.filter((v) => v !== 0).length === 0) return console.log('SAD');
else {
  const result = [];
  let sum = 0;
  for (let i = 0; i < checkDays; i++) {
    sum += dayVisitors[i];
  }
  result.push(sum);
  for (let i = checkDays; i < dayVisitors.length; i++) {
    sum += dayVisitors[i] - dayVisitors[i - checkDays];
    result.push(sum);
  }
  const max = Math.max(...result);
  console.log([max, result.filter((v) => v === max).length].join('\n'));
}

// const printVisitors = (checkDays, dayVisitors) => {
//   if (dayVisitors.filter((v) => v !== 0).length === 0) return console.log('SAD');
//   let count = 0;
//   let sum = 0;
//   let max = 0;
//   let curMax = 0;
//   for (let i = 0; i < checkDays; i++) {
//     sum += dayVisitors[i];
//   }
//   max = sum;
//   curMax = max;
//   count += 1;
//   for (let i = checkDays; i < dayVisitors.length; i++) {
//     sum += dayVisitors[i] - dayVisitors[i - checkDays];
//     if (sum > max) {
//       max = sum;
//       curMax = max;
//       count = 1;
//     } else if (sum === max) {
//       count += 1;
//     }
//   }

//   console.log([max, count].join('\n'));
// };

// printVisitors(
//   input[0].split(' ')[1],
//   input[1].split(' ').map((v) => +v)
// );
