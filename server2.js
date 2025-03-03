const http = require('http');
const { emitWarning } = require('process');

const port = 5000;
const host = 'localhost';

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.end(`
            <h1>home page</h1>
            <a href="/about">about Page</a>
            <a href="/contact">contact Page</a>
            `)
    } else if (request.url === '/about') {
        response.end(`
            <h1>About Page</h1>
            <a href="/">Home page</a>
            <a href="/contact">contact Page</a>
            `);
    } else if (request.url === '/contact') {
        response.end(`
            <h1>Contact Page</h1>
            <a href="/">Home page</a>
            <a href="/about">about Page</a>
            `);
    } else {
        response.end(
            `<h1>404 ERROR:</h1>
             can find the page
            <a href="/">Home page</a>`
        );
    }
})

server.listen(port, host, () => {
    console.log(`server running in http://${host}:${port}`);
});