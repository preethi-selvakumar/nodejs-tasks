const { Duplex } = require("stream");

const duplexStream = new Duplex({
    write(chunk, encoding, callback) {
        console.log("Writable received:", chunk.toString());
        this.push(chunk.toString().toUpperCase());
        callback();
    },
    read(size) { }
});

process.stdin.pipe(duplexStream).pipe(process.stdout);
