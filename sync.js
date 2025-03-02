const { readFileSync, writeFileSync } = require('fs');

const firstFile = readFileSync('./subFile/first.txt', 'utf8');
const secondFile = readFileSync('subFile/second.txt', 'utf8');

console.log(firstFile);
console.log(secondFile);

writeFileSync(
    './subFile/syncFile.txt',
    `this is from sync file ${firstFile} and ${secondFile}`
)

writeFileSync('./subFile/syncFile.doc', 'hey her')