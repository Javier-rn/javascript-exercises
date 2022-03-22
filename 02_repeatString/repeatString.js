const repeatString = function (str, nTimes) {
    if (nTimes < 0) {
        return 'ERROR';
    }
    let result = '';
    for (let i = 0; i < nTimes; i++) {
        result += str;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
