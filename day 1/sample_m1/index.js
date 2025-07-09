const http = require('http');
const jokes = [
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "Debugging: Being the detective in a crime movie where you are also the murderer.",
];
const server = http.createServer((req, res) => {
    if (req.url === '/joke') {
        const random = Math.floor(Math.random() * jokes.length);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ joke: jokes[random] }));
    } else {
        res.writeHead(404);
        res.end("Not Found");
    }
});
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});