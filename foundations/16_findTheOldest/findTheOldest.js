const findTheOldest = function(arr) {
    return arr.reduce((acc, currentVal) => {
        let currentAge = currentVal.yearOfDeath ? currentVal.yearOfDeath - currentVal.yearOfBirth : new Date().getFullYear() - currentVal.yearOfBirth;
        let accAge = acc.yearOfDeath ? acc.yearOfDeath - acc.yearOfBirth : new Date().getFullYear() - acc.yearOfBirth;
        
        if(accAge < currentAge) acc = currentVal;

        return acc;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
