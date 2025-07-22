const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome Home</h1>');
    } 
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1><p>Page does not exist.</p>');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
