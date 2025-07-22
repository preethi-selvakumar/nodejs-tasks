const http = require('http');

const products = [
    { id: 1, name: 'Pen' },
    { id: 2, name: 'Notebook' },
    { id: 3, name: 'Pencil' },
    { id: 4, name: 'Pencil' }
];

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/api/products') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(products));
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
