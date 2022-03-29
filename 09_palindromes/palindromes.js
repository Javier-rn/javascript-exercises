const palindromes = function (str) {
    const letters = Array.from('abcdefghijklmnopqrstuvwxyz');
    const strArray = str.toLowerCase().split('');

    const finalArray = [];
    const checkArray = [];

    for (let character of strArray) {
        if (letters.includes(character)) {
            finalArray.push(character);
        }
    }

    for (let i = finalArray.length - 1; i >= 0; i--) {
        checkArray.push(finalArray[i]);
    }

    const finalStr = finalArray.join('');
    const checkStr = checkArray.join('');

    if (finalStr === checkStr) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

// A car, a man, a maraca.
// Rats live on no evil star.
// Lid off a daffodil.
// Animal loots foliated detail of stool lamina.
// A nut for a jar of tuna.
