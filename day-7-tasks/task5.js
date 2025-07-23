function p5() {
    return new Promise((resolve, reject) => {
        oldFunc((err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
}

function oldFunc(cb) {
    setTimeout(() => {
        cb(null, "Data received");
    }, 1000);
}

p5().then((msg) => {
    console.log(msg);
});
