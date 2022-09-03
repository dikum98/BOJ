const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt')
  .toString()
  .trim();

const croatiaAlphabetArr = [/c=/g, /c-/g, /dz=/g, /d-/g, /lj/g, /nj/g, /s=/g, /z=/g];

const getCroatiaAlphabetLength = (str) => {
  croatiaAlphabetArr.forEach((alphabet) => {
    str = str.replace(alphabet, '.');
  });
  return str.length;
};

console.log(getCroatiaAlphabetLength(input));
