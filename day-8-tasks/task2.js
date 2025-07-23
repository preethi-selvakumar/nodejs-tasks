function showOrder() {
    process.nextTick(() => {
        console.log('This is from nextTick');
    });

    setImmediate(() => {
        console.log('This is from setImmediate');
    });
}

showOrder();
