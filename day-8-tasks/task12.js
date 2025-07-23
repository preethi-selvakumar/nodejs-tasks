function mixedTasks() {
    console.log('Start');

    process.nextTick(() => {
        console.log('From process.nextTick');
    });

    Promise.resolve().then(() => {
        console.log('From Promise (then)');
    });

    setTimeout(() => {
        console.log('From setTimeout');
    }, 0);

    console.log('End');
}

mixedTasks();
