function secretName() {
    let name = "Preethi"; // private variable

    return function () {
        return "My name is " + name;
    };
}

const sayName = secretName();

console.log(sayName());
