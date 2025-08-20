function multiplierFactory(x) {
    return function (y) {
        return x * y;
    };
}

const double = multiplierFactory(2);
const triple = multiplierFactory(3);

console.log(double(5));
console.log(triple(5)); 
