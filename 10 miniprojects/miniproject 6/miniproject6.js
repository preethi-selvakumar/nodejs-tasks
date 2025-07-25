const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/buffer' && req.method === 'GET') {
        const filePath = path.join(__dirname, 'tech.webp');

        fs.readFile(filePath, (err, data) => {
            if (!err) {
                const base64String = data.toString('base64');
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ base64: base64String }));
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
