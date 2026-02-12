const pascal = function (n, result = [1], index = 0) {
  if (n <= 0) return;

  if (index >= n - 1) return result;

  // add zeroes to beginning and end of current pascal's row
  let arrPrep = [0].concat(result).concat(0);

  // reset the current row
  let currentRow = [];

  // add the numbers together and push to array
  for (let j = 0; j < arrPrep.length; j++) {
    if (arrPrep[j + 1] !== undefined) {
      let sum = arrPrep[j] + arrPrep[j + 1];
      currentRow.push(sum);
    }
  }

  return pascal(n, currentRow, index + 1);
};

// Do not edit below this line
module.exports = pascal;
