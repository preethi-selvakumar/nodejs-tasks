function startCountdown(seconds, onComplete) {
    const intervalId = setInterval(() => {
        console.log("Time left:", seconds);
        seconds--;

        if (seconds < 0) {
            clearInterval(intervalId);
            onComplete();
        }
    }, 1000);
}

startCountdown(5, () => {
    console.log("Timer finished!");
});
