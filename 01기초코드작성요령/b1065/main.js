const input = +require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt')
  .toString();

function isHansu(num) {
  const numStr = num + '';
  const diff = numStr[0] - numStr[1];

  for (let i = 1; i < numStr.length - 1; i++) {
    if (numStr[i] - numStr[i + 1] !== diff) return false;
  }
  return true;
}

function getHansuCount(input) {
  let hansuCount = 0;

  for (let i = 1; i <= input; i++) {
    hansuCount = isHansu(i) ? hansuCount + 1 : hansuCount;
  }

  return hansuCount;
}

console.log(getHansuCount(input));
