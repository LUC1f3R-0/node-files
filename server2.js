const http = require('http');
const { request } = require('https');


const port = 5000;
const host = 'localhost';


const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.end(`
            <h1>Home page</h1>
            <a href='/about'>about</a>
            `);
    } else if (request.url === '/about') {
        response.end(`
            <h1>about page</h1>
            <a href="/">home</a>
            `);
    } else {
        response.end(
            `<p><u>ERROR: 404</u> Can't find the files.</p>`
        );
    }
})


server.listen(port, host, () => {
    console.log(`server running on http://${host}:${port}`);
})