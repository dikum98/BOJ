const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt').toString().trim().split('\n');

const countGroupWords = ([length, ...input]) => {
  let count = 0;
  input.forEach((word) => (count = isGroupWord(word) ? count + 1 : count));
  console.log(count);
};

const isGroupWord = (word) => {
  const checkCharacter = {};
  for (let i = 0; i < word.length; i++) {
    if (checkCharacter.hasOwnProperty(word[i])) return false;
    if (word[i] !== word[i + 1]) checkCharacter[word[i]] = 1;
  }
  return true;
};

countGroupWords(input);
