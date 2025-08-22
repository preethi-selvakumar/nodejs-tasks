const EventEmitter = require("events");
const emitter = new EventEmitter();

// Normal event
emitter.on("data", (msg) => {
    console.log("Data received: " + msg);
});

// Error event
emitter.on("error", (err) => {
    console.error("Error caught: " + err.message);
});

// Emit data event
emitter.emit("data", "Hello Event!");

// Emit error event
emitter.emit("error", new Error("Something went wrong in EventEmitter!"));

console.log("Program continues after handling error.");
