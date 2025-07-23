function f12() {
    const p1 = new Promise((resolve) => {
        setTimeout(() => resolve("Promise 1 resolved"), 2000);
    });

    const p2 = new Promise((resolve) => {
        setTimeout(() => resolve("Promise 2 resolved"), 1000);
    });

    const p3 = new Promise((_, reject) => {
        setTimeout(() => reject("Promise 3 rejected"), 1500);
    });

    Promise.race([p1, p2, p3])
        .then((result) => {
            console.log("First settled:", result);
        })
        .catch((error) => {
            console.log("First settled with error:", error);
        });
}

f12();
