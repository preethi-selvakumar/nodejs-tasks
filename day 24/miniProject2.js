console.log(message); // undefined - var hoisted but not initialized
var message = "Hello, Hoisting!";

try {
    console.log(greeting); // ReferenceError
}
catch (err) {
    console.log(err.message);
}

let greeting = "Hi, Let!";

function sayHi() {
    console.log("Hi from function declaration!");
}
sayHi();

const sayBye = function () {
    console.log("Bye from function expression!");
};
sayBye();