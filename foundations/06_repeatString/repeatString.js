const repeatString = function(string, num) {
    if(num < 0)
        return "ERROR";
    
    let newString = "";
    for (let index = 0; index < num; index++) {
        newString += string;  
    }

    return newString;
};

// Do not edit below this line
module.exports = repeatString;
