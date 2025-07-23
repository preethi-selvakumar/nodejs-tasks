function immediateInCallback() {
    console.log('Start');

    setTimeout(() => {
        console.log('Inside setTimeout callback');

        setImmediate(() => {
            console.log('Inside setImmediate (nested)');
        });

    }, 0);

    console.log('End');
}

immediateInCallback();
