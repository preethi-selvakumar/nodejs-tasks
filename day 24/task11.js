function printNumbers() {
    for (let i = 1; i <= 3; i++) {
        (function (num) {
            setTimeout(function () {
                console.log(num);
            }, num * 1000);
        })(i); // closure remembers 'i'
    }
}

printNumbers();
