async function f13() {
    for (let i = 1; i <= 3; i++) {
        try {
            const result = await tryTask();
            console.log("Success:", result);
            break;
        } 
        catch (err) {
            console.log("Try", i, "failed:", err);
            if (i === 3) {
                console.log("All tries failed.");
            }
        }
    }
}

function tryTask() {
    return new Promise((resolve, reject) =>
        Math.random() > 0.5 ? resolve("Done") : reject("Error")
    );
}

f13();
