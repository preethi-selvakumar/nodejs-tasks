function delay(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}

async function f9() {
    console.log("Start");
    await delay(2000);
    console.log("End after 2 seconds");
}

f9();
