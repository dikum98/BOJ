const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n');

function getTime(from, lapse) {
  let [hour, minute] = from.split(' ').map((v) => +v);

  minute += +lapse;
  if (minute >= 60) {
    const plusTime = Math.floor(minute / 60);
    hour += plusTime;
    minute -= 60 * plusTime;

    if (hour >= 24) hour -= 24;
  }

  console.log(`${hour} ${minute}`);
}

getTime(input[0], input[1]);
