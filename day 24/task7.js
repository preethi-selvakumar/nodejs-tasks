function outerFunction() {
    let outerVar = "I am from outer scope";

    function middleFunction() {
        let middleVar = "I am from middle scope";

        function innerFunction() {
            let innerVar = "I am from inner scope";

            console.log(outerVar);  // Accessible (lexical scope)
            console.log(middleVar); // Accessible
            console.log(innerVar);  // Accessible (own variable)
        }

        innerFunction();
        // console.log(innerVar); //  Error: not accessible here
    }

    middleFunction();
    // console.log(middleVar); //  Error: not accessible here
}

outerFunction();
