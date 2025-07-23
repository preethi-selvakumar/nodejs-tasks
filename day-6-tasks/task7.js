function addSync(a, b) {
    return a + b;
}

function addAsync(a, b, callback) {
    setTimeout(() => {
        const result = addSync(a, b);
        callback(null, result);
    }, 1000);
}

addAsync(5, 3, (err, result) => {
    if (err) {
        console.error("Error:", err.message);
    } 
    else {
        console.log("Result:", result);
    }
});
