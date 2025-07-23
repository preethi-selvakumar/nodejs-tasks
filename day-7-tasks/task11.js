async function f11() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await res.json();

        users.forEach((user) => {
            console.log(user.name);
        });
    } 
    catch (err) {
        console.log("Error fetching data:", err);
    }
}

f11();
