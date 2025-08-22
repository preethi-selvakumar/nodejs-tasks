process.on('uncaughtException', function (error) {
    console.log("Global Error caught: " + error.message);
});

throw new Error("Something went wrong globally!");

