function p2() {
    return new Promise((_, reject) => {
        reject("Promise rejected with an error!");
    });
}

p2().catch((err) => {
    console.log(err);
});
