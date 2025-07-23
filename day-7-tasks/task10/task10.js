const fs = require("fs").promises;

async function f10() {
    try {
        const file1 = await fs.readFile("file1.txt", "utf-8");
        const file2 = await fs.readFile("file2.txt", "utf-8");

        console.log("File 1 Content:\n", file1);
        console.log("File 2 Content:\n", file2);
    } 
    catch (err) {
        console.log("Error reading files:", err);
    }
}

f10();
