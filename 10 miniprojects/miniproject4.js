const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;

    res.writeHead(200, { 'Content-Type': 'text/plain' });

    if (url === '/') {
        res.end('Welcome to our homepage!');
    } else if (url === '/help') {
        res.end('How can we help you?');
    } else if (url === '/services') {
        res.end('These are the services we offer.');
    } else {
        res.writeHead(404);
        res.end('404 - Page not found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
