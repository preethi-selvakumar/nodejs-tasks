const express = require("express");
const app = express();
const PORT = 3000;

// route
app.get("/", (req, res) => {
    res.send("Home Page");
});

// Route with error
app.get("/error", (req, res, next) => {
    let err = new Error("Something went wrong!");
    next(err); // pass error to middleware
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error("Error caught: " + err.message);
    res.status(500).send("Error: " + err.message);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
