function measureDelay() {
    const start = Date.now();

    setTimeout(() => {
        const end = Date.now();
        const delay = end - start;

        console.log(`Expected delay: 100ms`);
        console.log(`Actual delay: ${delay}ms`);
    }, 100);
}

measureDelay();
