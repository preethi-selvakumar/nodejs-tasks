const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/contact') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const data = querystring.parse(body);
            const { name, email, message } = data;

            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            const entry = {
                name,
                email,
                message,
                time: new Date().toISOString()
            };

            fs.appendFile('contact.json', JSON.stringify(entry) + '\n', () => {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Data received');
            });
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
