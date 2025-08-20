function createAdder(fixedNumber) {
    return function (num) {
        return num + fixedNumber;
    };
}

const addFive = createAdder(5);
const addTen = createAdder(10);

console.log(addFive(3));
console.log(addTen(7));   
