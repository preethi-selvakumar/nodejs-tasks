function tickRecursion(count = 0) {
    if (count === 5) {
        console.log('Stopped nextTick recursion');
        return;
    }

    process.nextTick(() => {
        console.log(`Tick count: ${count + 1}`);
        tickRecursion(count + 1);
    });
}

tickRecursion();
