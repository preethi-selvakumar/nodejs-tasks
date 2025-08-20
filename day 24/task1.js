// Global Scope
let globalVar = "I am a global variable";

function showScope() {
    // Function Scope
    let functionVar = "I am inside a function";

    console.log(globalVar);   // Accessible
    console.log(functionVar); // Accessible

    if (true) {
        // Block Scope
        let blockVar = "I am inside a block";
        console.log(blockVar); // Accessible here
    }

    // console.log(blockVar); // Error: blockVar not defined outside block
}

showScope();

// console.log(functionVar); // Error: functionVar not defined outside function
