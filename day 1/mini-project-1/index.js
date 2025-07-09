const http = require('http');
const url = require('url');

const quotes = [
    { author: "Nelson Mandela", quote: "It always seems impossible until it's done." },
    { author: "Walt Disney", quote: "The way to get started is to quit talking and begin doing." },
    { author: "Steve Jobs", quote: "The only way to do great work is to love what you do." },
    { author: "Oprah Winfrey", quote: "The biggest adventure you can take is to live the life of your dreams." },
    { author: "Maya Angelou", quote: "You will face many defeats in life, but never let yourself be defeated." }
];

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (req.method === 'GET' && parsedUrl.pathname === '/quote') {
        let filteredQuotes = quotes;
        const authorQuery = parsedUrl.query.author;

        if (authorQuery) {
            filteredQuotes = quotes.filter(q =>
                q.author.toLowerCase().includes(authorQuery.toLowerCase())
            );

            if (filteredQuotes.length === 0) {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: "No quotes found for the given author." }));
                return;
            }
        }

        const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
        const selectedQuote = filteredQuotes[randomIndex];

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(selectedQuote));
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
