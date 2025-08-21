const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: fs.createReadStream("task8_input.txt"),
});

rl.on("line", (line) => {
    console.log(line);
});
