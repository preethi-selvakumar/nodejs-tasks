function run(callback) {
    try {
        callback();
    } 
    catch (err) {
        console.error("Caught error:", err.message);
    }
}

run(() => {
    throw new Error("Something went wrong");
});
