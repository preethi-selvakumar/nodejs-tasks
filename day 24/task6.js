function rememberName(name) {
    return function () {
        return "Hello, " + name;
    };
}

const greetPreethi = rememberName("Preethi");
const greetSelvakumar = rememberName("Selvakumar");

console.log(greetPreethi());
console.log(greetSelvakumar()); 
