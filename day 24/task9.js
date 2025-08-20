// Function Declaration
sayHello(); // Works because declaration is hoisted

function sayHello() {
    console.log("Hello from function declaration!");
}

// Function Expression
try {
    greet(); // Error: Cannot access 'greet' before initialization
} catch (error) {
    console.log("Error with function expression:", error.message);
}

let greet = function () {
    console.log("Hello from function expression!");
};

greet(); // Works after definition
