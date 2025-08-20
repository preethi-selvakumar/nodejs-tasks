// Function called before declaration
sayHello(); // Works because of hoisting

function sayHello() {
    console.log("Hello, I am hoisted!");
}

// Function expression (not hoisted)
try {
    greet(); // Error: greet is not a function
} catch (error) {
    console.log("Error with function expression:", error.message);
}

var greet = function () {
    console.log("Hi, I am a function expression!");
};
