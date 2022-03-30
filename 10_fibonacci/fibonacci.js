const fibonacci = function (num) {
    if (num < 0) {
        return 'OOPS';
    }
    const fibSequence = [1, 1];
    for (let i = 0; i < num; i++) {
        fibSequence.push(fibSequence[i] + fibSequence[i + 1]);
    }
    return fibSequence[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
