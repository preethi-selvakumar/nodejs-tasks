// Schedule a function to run 10 seconds from now
const currentTime = new Date();
const targetTime = new Date(currentTime.getTime() + 10000); // +10 sec

const delay = targetTime.getTime() - currentTime.getTime();

setTimeout(() => {
    console.log("The scheduled task is running now at:", new Date().toLocaleTimeString());
}, delay);
