const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/file') {
        fs.readFile('miniproject3.txt', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('File Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Route Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
