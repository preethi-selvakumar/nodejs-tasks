const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === '/log') {
        const timestamp = new Date().toISOString();
        const ip = req.socket.remoteAddress;

        const log = `Time: ${timestamp} - IP: ${ip}\n`;

        fs.appendFile('miniproject5.txt', log, () => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Log saved\n');
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found\n');
    }
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
