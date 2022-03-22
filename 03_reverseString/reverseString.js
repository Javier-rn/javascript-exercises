const reverseString = function (str) {
    let result = '';
    const characters = str.split('');

    for (let i = characters.length - 1; i >= 0; i--) {
        result += characters[i];
    }

    return result;
};

// Do not edit below this line
module.exports = reverseString;
