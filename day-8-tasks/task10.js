function simulateRequest() {
    console.log('Request started');

    setTimeout(() => {
        console.log('Response received (simulated)');
    }, 2000); 

    console.log('Waiting for response...');
}

simulateRequest();
