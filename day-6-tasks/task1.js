function callAfterOneSecond(callback) {
    setTimeout(callback, 1000);
}

callAfterOneSecond(() => {
    console.log("Called after 1 second");
});
