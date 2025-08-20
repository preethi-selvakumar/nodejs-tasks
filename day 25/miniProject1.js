// Print current date and time every second for 5 seconds
let count = 0;

const intervalId = setInterval(() => {
    const now = new Date();
    console.log("Current Date & Time:", now.toLocaleString());

    count++;
    if (count === 5) {
        clearInterval(intervalId);
        console.log("Finished printing after 5 seconds.");
    }
}, 1000);
