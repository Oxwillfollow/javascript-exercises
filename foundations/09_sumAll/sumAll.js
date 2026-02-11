const sumAll = function(int1, int2) {
    // non-int should return error msg
    if(!Number.isInteger(int1) || !Number.isInteger(int2))
        return 'ERROR';

    // negative int should return error msg
    if(int1 < 0 || int2 < 0)
        return 'ERROR';

    const smallerInt = int1 < int2 ? int1 : int2;
    const largerInt = int1 > int2 ? int1 : int2;
    var sum = 0;

    for (let index = smallerInt; index <= largerInt; index++) {
        sum+= index;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
