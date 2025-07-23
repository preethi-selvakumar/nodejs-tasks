function p1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise resolved after 2 seconds!");
        }, 2000);
    });
}

p1().then((msg) => {
    console.log(msg);
});
