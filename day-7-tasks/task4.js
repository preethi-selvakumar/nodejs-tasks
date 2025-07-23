function p4() {
    return new Promise((resolve, reject) => {
        reject("Something went wrong!");
    });
}

p4()
    .then((msg) => {
        console.log(msg);
    })
    .catch((err) => {
        console.log("Error:", err);
    });
