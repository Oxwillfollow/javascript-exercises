const add = function(num1, num2) {
  return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(numbersArr) {
	return numbersArr.reduce((acc, currentVal) => acc + currentVal, 0);
};

const multiply = function(numbersArr) {
	return numbersArr.reduce((acc, currentVal) => acc * currentVal, 1);
};

const power = function(base, exponent) {
	return Math.pow(base,exponent);
};

const factorial = function(num) {
  let result = 1;

  if(num > 0){
    for (let index = 1; index < num; index++) {
      result = result*index;
    }
    return result*num;
  }
  else {
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
