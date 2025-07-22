const http = require('http');

const server = http.createServer((req, res) => {
    try {
        if (req.url === '/error') {
            throw new Error('Something went wrong!');
        }

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('No error occurred');
    } 
    catch (err) {
        console.error('Caught error in request handler:', err.message);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
    }
});

server.on('error', (err) => {
    console.error('Server-level error:', err.message);
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
