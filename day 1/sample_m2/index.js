const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === '/calculate') {
        const { num1, num2, op } = parsedUrl.query;
        let result;
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        switch (op) {
            case 'add': result = a + b; break;
            case 'subtract': result = a - b; break;
            case 'multiply': result = a * b; break;
            case 'divide': result = b !== 0 ? a / b : 'Error: divide by zero'; break;
            default: result = 'Invalid operation';
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ result }));
    } else {
        res.writeHead(404);
        res.end("Endpoint not found");
    }
});
server.listen(3000, () => {
    console.log("Calculator server is running on http://localhost:3000");
});