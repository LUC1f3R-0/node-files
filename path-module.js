const path = require('path');

// 1. path.basename(p, ext)
// Returns the last portion of a path, often referred to as the file name. 
// You can optionally remove a specific file extension.
console.log("Base name:", path.basename('/users/admin/test/file.txt')); // 'file.txt'
console.log("Base name with extension removed:", path.basename('/users/admin/test/file.txt', '.txt')); // 'file'

// 2. path.dirname(p)
// Returns the directory name of a path (everything before the last slash).
console.log("Directory name:", path.dirname('/users/admin/test/file.txt')); // '/users/admin/test'

// 3. path.extname(p)
// Returns the extension of the file (including the dot).
console.log("File extension:", path.extname('/users/admin/test/file.txt')); // '.txt'

// 4. path.format(pathObject)
// Converts a path object (containing root, dir, base, ext, name) into a string path.
const pathObj = {
    root: '/',
    dir: '/users/admin/test',
    base: 'file.txt',
    ext: '.txt',
    name: 'file'
};
console.log("Formatted path:", path.format(pathObj)); // '/users/admin/test/file.txt'

// 5. path.isAbsolute(p)
// Checks if the given path is an absolute path.
console.log("Is absolute:", path.isAbsolute('/users/admin/test/file.txt')); // true
console.log("Is absolute:", path.isAbsolute('test/file.txt')); // false

// 6. path.join([...paths])
// Joins multiple path segments into a single path.
console.log("Joined path:", path.join('/users/admin', 'test', 'file.txt')); // '/users/admin/test/file.txt'

// 7. path.normalize(p)
// Normalizes a path, resolving '..' and '.' segments.
console.log("Normalized path:", path.normalize('/users/admin/../test/file.txt')); // '/users/test/file.txt'

// 8. path.parse(p)
// Parses a given path and returns an object with properties like root, dir, base, ext, and name.
console.log("Parsed path:", path.parse('/users/admin/test/file.txt'));
// Output:
// {
//   root: '/',
//   dir: '/users/admin/test',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file'
// }

// 9. path.relative(from, to)
// Returns the relative path from the 'from' path to the 'to' path.
console.log("Relative path:", path.relative('/users/admin/test', '/users/admin/images/file.txt')); // '../images/file.txt'

// 10. path.resolve([...paths])
// Resolves a sequence of paths to an absolute path. If the first path is an absolute path, it is used as the starting point.
console.log("Resolved path:", path.resolve('test', 'file.txt')); // '/current/working/directory/test/file.txt'

// 11. path.sep
// The platform-specific path segment separator (e.g., '/' on UNIX, '\\' on Windows).
console.log("Path separator:", path.sep); // '/' on UNIX or '\\' on Windows

// 12. path.delimiter
// The platform-specific delimiter for separating paths in an environment variable (e.g., ':' on UNIX, ';' on Windows).
console.log("Path delimiter:", path.delimiter); // ':' on UNIX or ';' on Windows
