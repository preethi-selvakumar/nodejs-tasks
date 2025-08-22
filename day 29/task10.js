try {
    throw new Error("This is a custom error!");
} catch (error) {
    console.log("Error caught: " + error.message);
    console.log("Stack trace: " + error.stack);
}
