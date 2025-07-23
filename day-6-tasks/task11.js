function createEmitter() {
    const events = {};

    return {
        on: function (eventName, callback) {
            if (!events[eventName]) {
                events[eventName] = [];
            }
            events[eventName].push(callback);
        },
        emit: function (eventName, data) {
            const callbacks = events[eventName];
            if (callbacks) {
                callbacks.forEach((cb) => cb(data));
            }
        }
    };
}

const emitter = createEmitter();

emitter.on("greet", function (name) {
    console.log("Hello", name);
});

emitter.emit("greet", "Preethi");
