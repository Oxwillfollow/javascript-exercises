const pascal = function (n) {
  if (n === 1) return [1];

  // add zeroes to beginning and end of current pascal's row
  let arrPrep = [0].concat(pascal(n - 1)).concat(0);

  let currentRow = [];

  // add the numbers together
  for (let j = 0; j < arrPrep.length; j++) {
    if (arrPrep[j + 1] !== undefined) {
      let sum = arrPrep[j] + arrPrep[j + 1];
      currentRow.push(sum);
    }
  }

  return currentRow;
};

// Do not edit below this line
module.exports = pascal;
