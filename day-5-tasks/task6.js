// task6.js
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/data') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('GET request received');
        }
        else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
        }
    }
    else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
