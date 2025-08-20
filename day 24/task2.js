function scopeCheck() {
    if (true) {
        var a = "I am var";     // function scoped
        let b = "I am let";     // block scoped
        const c = "I am const"; // block scoped

        console.log(a); // Accessible here
        console.log(b); // Accessible here
        console.log(c); // Accessible here
    }

    console.log(a); // var works outside block
    // console.log(b); // let not accessible outside block
    // console.log(c); // const not accessible outside block
}

scopeCheck();
