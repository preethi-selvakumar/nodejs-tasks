function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received after 1 second");
        }, 1000);
    });
}

async function f7() {
    const result = await getData();
    console.log(result);
}

f7();
