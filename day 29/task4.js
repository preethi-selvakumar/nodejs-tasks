let promise = new Promise(function (resolve, reject) {
    reject("Error: Promise rejected!");
});

promise.then(function (result) {
    console.log("Result: " + result);
}).catch(function (error) {
    console.log("Error caught: " + error);
});

console.log("Program continues after promise.");
