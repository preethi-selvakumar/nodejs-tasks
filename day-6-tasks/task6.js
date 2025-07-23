function fetchData(callback) {
    const isSuccess = Math.random() > 0.5;

    if (isSuccess) {
        callback(null, "Data fetched successfully");
    } 
    else {
        callback(new Error("Failed to fetch data"), null);
    }
}

fetchData((err, data) => {
    if (err) {
        console.error("Error:", err.message);
    } 
    else {
        console.log("Success:", data);
    }
});
