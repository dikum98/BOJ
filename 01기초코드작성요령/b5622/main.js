const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt')
  .toString()
  .trim();

function getDialTime(word) {
  let time = 0;
  const numberMap = {
    2: 'ABC',
    3: 'DEF',
    4: 'GHI',
    5: 'JKL',
    6: 'MNO',
    7: 'PQRS',
    8: 'TUV',
    9: 'WXYZ',
  };

  // for (let i = 0; i < word.length; i++) {
  //   for (const key in numberMap) {
  //     if (numberMap[key].includes(word[i])) {
  //       time += +key + 1;
  //       break;
  //     }
  //   }
  // }

  const numbers = Object.keys(numberMap);

  for (let i = 0; i < word.length; i++) {
    time += +numbers.find((num) => numberMap[num].includes(word[i])) + 1;
  }

  console.log(time);
}

getDialTime(input);
