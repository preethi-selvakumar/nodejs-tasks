const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === '/parse-url') {
        const query = parsedUrl.query;

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(query));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Route not found');
    }
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
