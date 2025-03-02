const os = require('os');

// 1. os.arch()
// Returns the architecture of the CPU (e.g., 'x64', 'arm', etc.)
console.log("CPU Architecture:", os.arch()); // Example: 'x64'

// 2. os.cpus()
// Returns an array of objects that contain information about each CPU core.
console.log("CPU Info:", os.cpus());

// 3. os.endianness()
// Returns the endianness of the CPU (either 'BE' for big-endian or 'LE' for little-endian).
console.log("CPU Endianness:", os.endianness()); // Example: 'LE'

// 4. os.freemem()
// Returns the amount of free system memory in bytes.
console.log("Free Memory (bytes):", os.freemem());

// 5. os.homedir()
// Returns the home directory of the current user.
console.log("Home Directory:", os.homedir());

// 6. os.hostname()
// Returns the hostname of the operating system (computer name).
console.log("Hostname:", os.hostname());

// 7. os.loadavg()
// Returns an array with the system load averages for the last 1, 5, and 15 minutes.
console.log("System Load Averages:", os.loadavg());

// 8. os.networkInterfaces()
// Returns an object containing information about network interfaces (e.g., IP addresses, MAC addresses).
console.log("Network Interfaces:", os.networkInterfaces());

// 9. os.platform()
// Returns the operating system platform (e.g., 'linux', 'darwin', 'win32').
console.log("Operating System Platform:", os.platform()); // Example: 'linux'

// 10. os.release()
// Returns the operating system release version.
console.log("OS Release:", os.release());

// 11. os.tmpdir()
// Returns the default directory for temporary files.
console.log("Temporary Directory:", os.tmpdir());

// 12. os.totalmem()
// Returns the total amount of system memory in bytes.
console.log("Total Memory (bytes):", os.totalmem());

// 13. os.type()
// Returns the operating system name (e.g., 'Linux', 'Darwin', 'Windows_NT').
console.log("OS Type:", os.type()); // Example: 'Linux'

// 14. os.uptime()
// Returns the system uptime in seconds (how long the system has been running).
console.log("Uptime (seconds):", os.uptime());

// 15. os.userInfo()
// Returns an object with information about the current user (e.g., username, UID, GID, homedir, shell).
console.log("User Info:", os.userInfo());


// const os = require('os');
const { minuetsToHour } = require('./secondsTohours');


const user = os.userInfo();
console.log(user);
const num = os.uptime();


console.log(minuetsToHour(3600));


console.log(`the System Uptime is ${minuetsToHour(num)} hours`);
