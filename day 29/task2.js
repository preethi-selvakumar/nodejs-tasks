async function fetchData() {
    try {
        let data = await Promise.reject("Something went wrong while fetching data!");
        console.log("Data received: " + data);
    } catch (error) {
        console.log("Error caught: " + error);
    }
}

fetchData();

console.log("Program continues after async function.");
