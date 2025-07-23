function blockCpu() {
    console.log('Start');

    setTimeout(() => {
        console.log('Async callback (setTimeout)');
    }, 0);

    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
        sum += i;
    }

    console.log('Blocking task done');
    console.log('End');
}

blockCpu();
