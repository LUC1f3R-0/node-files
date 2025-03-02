// // console.log('hello word');
// // console.log(global);

// const { add, stringMake } = require('./math')
// // const os = require('os')
// // const path = require('path')
// // console.log(os.type());
// // console.log(os.version());
// // console.log(os.homedir());

// // console.log(__dirname);
// // console.log(__filename);

// // console.log(path.dirname(__filename));
// // console.log(path.basename(__filename));
// // console.log(path.extname(__filename));

// // console.log(path.parse(__filename));

// console.log(add(1, 2));

// const num = stringMake(8786);

// console.log(num);
// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     if (req.url === '/' || req.url === '/index.html') {
//         fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
//             if (err) {
//                 res.writeHead(404, { 'Content-Type': 'text/html' });
//                 res.end('<h1>404 Not Found</h1>');
//             } else {
//                 res.writeHead(200, { 'Content-Type': 'text/html' });
//                 res.end(data);
//             }
//         });
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end('<h1>404 Not Found</h1>');
//     }
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const http = require('http');

const port = 5000;
const host = 'localhost';

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/') {
        res.end('Welcome to our page');
    } else if (req.url === '/about') {
        res.end('Here is the about page');
    } else {
        res.end(`
            <h1>Oops!</h1>
            <p>We can't find your page</p>
            <a href="/">Home</a>
        `);
    }
});

server.listen(port, host, () =>
    console.log(`Server running at http://${host}:${port}/`)
);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const http = require('http');
// const fs = require('fs');

// http.createServer((req, res) =>
//     fs.readFile('index.html', (err, data) =>
//         res.end(err ? '<h1>404 Not Found</h1>' : data)
//     )
// ).listen(3000, () => console.log('Server running at http://127.0.0.1:3000/'));

