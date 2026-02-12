const permutations = function (arr) {
  if (arr.length <= 0) return [[]];

  let result = [];

  if (arr.length === 1) {
    result[0] = arr;
  } else if (arr.length === 2) {
    // if only two items, return an array with both possibilities
    result[0] = arr;
    result[1] = [arr[1], arr[0]];
  } else {
    // if 3 or more items, go through each item and get the permutations of the subarray with that item removed
    // i.e. for all variations of 1 at the beginning: [1, permutations([2,3,4])]
    for (let i = 0; i < arr.length; i++) {
      const subArr = [...arr.slice(0, i), ...arr.slice(i + 1, arr.length)];

      let subPermutations = permutations(subArr);

      // for each variation of the remaining numbers, add it to result
      for (let j = 0; j < subPermutations.length; j++) {
        result.push([arr[i], ...subPermutations[j]]);
      }
    }
  }

  return result;
};

// Do not edit below this line
module.exports = permutations;
