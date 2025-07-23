function microtaskOrder() {
    console.log('Start');

    process.nextTick(() => {
        console.log('From process.nextTick');
    });

    queueMicrotask(() => {
        console.log('From queueMicrotask');
    });

    console.log('End');
}

microtaskOrder();
