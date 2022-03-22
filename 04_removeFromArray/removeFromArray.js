const removeFromArray = function (arr, ...nums) {
    const newArr = arr;
    const checkArr = nums;

    for (let i = newArr.length - 1; i >= 0; i--) {
        if (checkArr.includes(newArr[i])) {
            newArr.splice(i, 1);
        }
    }

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;

// removeFromArray([1, 2, 3, 4], 3);      // should remove 3 and return [1,2,4]
