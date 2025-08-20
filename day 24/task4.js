// Using let
try {
    console.log(a); // ReferenceError (TDZ)
    let a = 10;
    console.log(a);
}
catch (error) {
    console.log("Error with let:", error.message);
}

// Using const
try {
    console.log(b); // ReferenceError (TDZ)
    const b = 20;
    console.log(b);
}
catch (error) {
    console.log("Error with const:", error.message);
}
