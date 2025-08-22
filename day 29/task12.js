const winston = require("winston");

// logger setup
const logger = winston.createLogger({
    level: "info",
    format: winston.format.simple(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: "error.log" })
    ]
});

// normal log
logger.info("App started");

// error
try {
    throw new Error("Something went wrong!");
} catch (err) {
    logger.error("Error caught: " + err.message);
}
