const { readFile, writeFile } = require('fs');


// readFile('./subFile/first.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         const first = result;
//         console.log(first);
//         readFile('./subFile/second.txt', 'utf8', (err, result2) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 const second = result2
//                 writeFile('./subFile/asynchronousFile.txt', `this is the first File: ${first} this is the second one: ${second}`, (err, result) => {
//                     if (err) {
//                         console.log(err);
//                     } else {
//                         console.log(result);
//                     }
//                 });
//             }
//         })
//     }
// });
console.log('start');

writeFile
    ('./subFile/another/hello-word.txt', 'console.log(pakaya)', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            readFile
                ('./subFile/another/hello-word.txt', 'utf8', (err, result) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('done');
                        console.log('Reading: ', result)
                    }
                })
        }
    })
console.log('stop');

