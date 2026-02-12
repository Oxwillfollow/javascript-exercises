const totalIntegers = function (obj, isFirstCall = true) {
  let total = 0;

  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      total += totalIntegers(obj[i], false);
    }
  } else if (typeof obj === "object" && obj !== null) {
    for (let val of Object.values(obj)) {
      total += totalIntegers(val, false);
    }
  } else {
    if (isFirstCall) return undefined;

    if (Number.isInteger(obj)) {
      return 1;
    }
  }

  return total;
};

// Do not edit below this line
module.exports = totalIntegers;
