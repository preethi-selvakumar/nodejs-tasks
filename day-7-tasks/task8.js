function getError() {
    return new Promise((_, reject) => {
        reject("Something went wrong");
    });
}

async function f8() {
    try {
        const result = await getError();
        console.log(result);
    }
    catch (err) {
        console.log("Error:", err);
    }
}

f8();
