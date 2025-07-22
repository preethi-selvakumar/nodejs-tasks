// task9.js
const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url.startsWith('/search')) {
        const parsedUrl = url.parse(req.url);
        const queryParams = querystring.parse(parsedUrl.query);

        console.log('Query:', queryParams.q);

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Search term: ${queryParams.q}`);
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
