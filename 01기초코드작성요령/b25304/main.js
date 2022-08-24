const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n');

function isSameCost(printedCost, priceList) {
  const calculatedCost = priceList.reduce((acc, cur) => {
    const [price, count] = cur.split(' ');
    return acc + price * count;
  }, 0);

  return printedCost === calculatedCost ? 'Yes' : 'No';
}

console.log(isSameCost(+input[0], input.slice(2)));
