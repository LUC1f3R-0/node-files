const { createReadStream } = require('fs');

const s = createReadStream('./subFile/text.txt', { highWaterMark: 1000, encoding: 'utf8' });

// s.on('data', (chunk)=>{
//     console.log(chunk);
// })

s.on('data', (chunk) => {
    console.log(chunk);
})
s.on('error', (error) => {
    console.log(error);
})