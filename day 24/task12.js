function createLeak() {
    let bigArray = new Array(1000000).fill("data"); // huge memory

    return function () {
        console.log("Still holding bigArray with length:", bigArray.length);
    };
}

const leaky = createLeak();

// Even if we don't use bigArray anymore,
// closure keeps it in memory => potential memory leak
leaky();
