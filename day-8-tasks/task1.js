function logOrder() {
    setTimeout(() => {
        console.log('Timeout callback');
    }, 0);

    setImmediate(() => {
        console.log('Immediate callback');
    });
}

logOrder();
