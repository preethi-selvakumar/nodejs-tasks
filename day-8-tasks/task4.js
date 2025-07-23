function nestedTimers() {
    console.log('Start');

    setTimeout(() => {
        console.log('First timeout');

        setTimeout(() => {
            console.log('Second timeout');
        }, 1000);

    }, 1000);

    console.log('End');
}

nestedTimers();
