const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Page Not Found');
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
