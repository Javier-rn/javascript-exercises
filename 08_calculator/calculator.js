const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (nums) {
    if (nums.length === 0) {
        return 0;
    } else {
        return nums.reduce((a, b) => a + b);
    }
};

const multiply = function (nums) {
    if (nums.length === 0) {
        return 0;
    } else {
        return nums.reduce((a, b) => a * b);
    }
};

const power = function (a, b) {
    let result = a;
    for (let i = 1; i < b; i++) {
        result *= a;
    }
    return result;
};

const factorial = function (a) {
    if (a < 2) {
        return 1;
    } else {
        let result = a;
        for (let i = a - 1; i > 0; i--) {
            result *= i;
        }
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
    factorial,
};
