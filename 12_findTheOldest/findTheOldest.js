const findTheOldest = function (arr) {
    const oldest = arr.reduce((person1, person2) => {
        return person1.yearOfDeath - person1.yearOfBirth >
            person2.yearOfDeath - person2.yearOfBirth
            ? person1
            : person2;
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;

const people = [
    {
        name: 'Carly',
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: 'Ray',
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: 'Jane',
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
];
