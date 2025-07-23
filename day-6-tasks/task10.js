function fetchData(callback) {
    setTimeout(() => {
        const data = "hello world";
        callback(data);
    }, 1000);
}

function showData(data) {
    console.log("Data:", data);
}

fetchData(showData);
