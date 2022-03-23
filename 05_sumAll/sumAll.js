const sumAll = function (num1, num2) {
    const allNums = [];
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    }

    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }

    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            allNums.push(i);
        }
    } else {
        for (let i = num2; i <= num1; i++) {
            allNums.push(i);
        }
    }

    let result = 0;
    for (let num of allNums) {
        result += num;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
