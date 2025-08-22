try {
    let num = 10;
    let result = num / 0;
    if (num === 10) {
        throw new Error("Number is 10, manually threw an error!");
    }
    console.log("Result: " + result);
} catch (error) {
    console.log("Error caught: " + error.message);
}

console.log("Program continues after try-catch.");
