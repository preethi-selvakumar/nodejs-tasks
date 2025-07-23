function p3() {
    return new Promise((resolve) => {
        resolve("Step 1");
    });
}

p3()
    .then((msg) => {
        console.log(msg);
        return "Step 2";
    })
    .then((msg) => {
        console.log(msg);
        return "Step 3";
    })
    .then((msg) => {
        console.log(msg);
    });
