// const fs = require('fs');

// // Function to read a file asynchronously
// function readFileAsync() {
//     fs.readFile('./subFile/another/hello-word-with-await.txt', 'utf8', (err, data) => {
//         if (err) {
//             console.error('Error reading file:', err);
//         } else {
//             console.log('File content:', data);
//         }
//     });
// }

// // Function to write a file asynchronously
// function writeFileAsync() {
//     const dataToWrite = 'Hello, World! This is asynchronous file writing!';
//     fs.writeFile('./subFile/another/output-async.txt', dataToWrite, (err) => {
//         if (err) {
//             console.error('Error writing file:', err);
//         } else {
//             console.log('File written successfully');
//         }
//     });
// }

// // Calling the functions
// console.log('Start');
// readFileAsync();   // Starts reading file asynchronously
// writeFileAsync();  // Starts writing file asynchronously
// console.log('End');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const fs = require('fs').promises; // Using Promises version

// // Async function to read a file
// async function readFileAsyncAwait() {
//     try {
//         const data = await fs.readFile('./subFile/another/hello-word-with-await.txt', 'utf8');
//         console.log('File content:', data);
//     } catch (error) {
//         console.error('Error reading file:', error.message);
//     }
// }

// // Async function to write a file
// async function writeFileAsyncAwait() {
//     const dataToWrite = 'Hello, World! This is asynchronous file writing with async/await!';
//     try {
//         await fs.writeFile('./subFile/another/output-async-await.txt', dataToWrite);
//         console.log('File written successfully');
//     } catch (error) {
//         console.error('Error writing file:', error.message);
//     }
// }

// // Calling the async functions
// console.log('Start');
// readFileAsyncAwait();   // Reads the file asynchronously with async/await
// writeFileAsyncAwait();  // Writes the file asynchronously with async/await
// console.log('End');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const fs = require('fs');

// // Function to read a file synchronously
// function readFileSync() {
//     try {
//         const data = fs.readFileSync('./subFile/another/hello-word-with-await.txt', 'utf8');
//         console.log('File content:', data);
//     } catch (error) {
//         console.error('Error reading file:', error.message);
//     }
// }

// // Function to write a file synchronously
// function writeFileSync() {
//     const dataToWrite = 'Hello, World! This is synchronous file writing!';
//     try {
//         fs.writeFileSync('./subFile/another/output-sync.txt', dataToWrite);
//         console.log('File written successfully');
//     } catch (error) {
//         console.error('Error writing file:', error.message);
//     }
// }

// // Calling the synchronous functions
// console.log('Start');
// readFileSync();  // Reads the file synchronously
// writeFileSync(); // Writes the file synchronously
// console.log('End');

