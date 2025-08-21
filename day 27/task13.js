const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.post("/upload", (req, res) => {
    const filePath = path.join(__dirname, "uploaded_task13.txt");
    const writableStream = fs.createWriteStream(filePath);

    req.pipe(writableStream);

    writableStream.on("finish", () => {
        res.send("File uploaded successfully and saved as uploaded_task13.txt");
    });

    writableStream.on("error", (err) => {
        res.status(500).send("Error while saving file: " + err.message);
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
