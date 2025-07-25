const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
    if (req.url === '/info') {
        const hostname = os.hostname();
        const uptime = process.uptime();

        const response = {
            port: PORT,
            hostname: hostname,
            uptime: uptime
        };

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(response));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);

});
