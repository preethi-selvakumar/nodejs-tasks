function getData(callback) {
    let error = null;
    let data = null;

    let success = false;

    if (!success) {
        error = "Error: Failed to get data!";
    } else {
        data = "Here is your data!";
    }

    callback(error, data);
}

getData(function (error, data) {
    if (error) {
        console.log("Error caught: " + error);
    } else {
        console.log("Data received: " + data);
    }
});

console.log("Program continues after callback.");
