function repeatTask() {
    let count = 0;

    const intervalId = setInterval(() => {
        count++;
        console.log(`Running task ${count}`);

        if (count === 5) {
            clearInterval(intervalId);
            console.log('Stopped repeating task');
        }
    }, 1000);
}

repeatTask();
