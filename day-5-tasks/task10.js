const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <html>
                <head>
                <title>Home</title>
                </head>
                <body>
                    <h1>Welcome to the Home Page</h1>
                    <p>This is a static HTML page.</p>
                </body>
            </html>
        `);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
