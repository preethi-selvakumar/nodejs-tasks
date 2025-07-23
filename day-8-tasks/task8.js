function promiseOrder() {
    console.log('Start');

    setTimeout(() => {
        console.log('From setTimeout');
    }, 0);

    setImmediate(() => {
        console.log('From setImmediate');
    });

    Promise.resolve().then(() => {
        console.log('From Promise (microtask)');
    });

    console.log('End');
}

promiseOrder();
