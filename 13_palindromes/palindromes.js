const palindromes = function (str) {
    // remove whitespace, punctuation and ignore casing
    str = str.replace(/\s|[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '').toLowerCase();
    return str === str.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
