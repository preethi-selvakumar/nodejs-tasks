process.on('unhandledRejection', function (reason, promise) {
    console.log("Global Promise rejection caught: " + reason);
});

let promise = new Promise(function (resolve, reject) {
    reject("Error: Promise rejected globally!");
});
