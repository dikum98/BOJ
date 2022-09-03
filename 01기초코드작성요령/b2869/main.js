const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt')
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);

function getHowLongWillSnailClimbTree(up, down, treeHeight) {
  let days = 0;
  let where = 0;

  // 시간 초과
  // while (where < treeHeight) {
  //   where += up;
  //   days += 1;
  //   if (where >= treeHeight) return days;
  //   where -= down;
  // }

  return Math.ceil((treeHeight - up) / (up - down)) + 1;
}

console.log(getHowLongWillSnailClimbTree(input[0], input[1], input[2]));
