const leapYears = function(year) {
    // every leap year is divisible by 4
    if(year % 4 !== 0) return false;

    // if a year is divisible by 100 it's not a leap year, unless it's also divisible by 400
    if(year % 100 == 0 && year % 400 != 0) return false;

    return true;
};

// Do not edit below this line
module.exports = leapYears;
