let seconds = 10;

const timerId = setInterval(() => {
    console.log("Remaining seconds:", seconds);
    seconds--;

    if (seconds < 0) {
        clearInterval(timerId);
        console.log("Countdown finished!");
    }
}, 1000);
