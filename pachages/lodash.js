const _ = require('lodash')

/**
 * Splits an array into groups of a specified size.
 */
function chunkExample() {
    const array = [1, 2, 3, 4, 5, 6];
    const result = _.chunk(array, 2); // Splits into [[1,2], [3,4], [5,6]]
    console.log(result);
}

/**
 * Removes fasley values (false, null, 0, "", undefined, NaN) from an array.
 */
function compactExample() {
    const array = [0, 1, false, 2, '', 3, null, undefined];
    const result = _.compact(array); // Removes falsey values → [1, 2, 3]
    console.log(result);
}

/**
 * Returns the difference between two arrays.
 */
function differenceExample() {
    const result = _.difference([1, 2, 3, 4], [2, 4]); // → [1, 3]
    console.log(result);
}

/**
 * Drops the first N elements of an array.
 */
function dropExample() {
    const array = [1, 2, 3, 4, 5];
    const result = _.drop(array, 2); // Drops first 2 elements → [3, 4, 5]
    console.log(result);
}

/**
 * Returns a unique array, removing duplicates.
 */
function uniqExample() {
    const array = [1, 2, 2, 3, 4, 4, 5];
    const result = _.uniq(array); // Removes duplicates → [1, 2, 3, 4, 5]
    console.log(result);
}

/**
 * Gets a nested property safely without errors.
 */
function getExample() {
    const obj = { a: { b: { c: 10 } } };
    const result = _.get(obj, 'a.b.c', 'default'); // → 10
    console.log(result);
}

/**
 * Sets a value at a nested property.
 */
function setExample() {
    const obj = {};
    _.set(obj, 'a.b.c', 100);
    console.log(obj); // { a: { b: { c: 100 } } }
}

/**
 * Omits specified keys from an object.
 */
function omitExample() {
    const obj = { a: 1, b: 2, c: 3 };
    const result = _.omit(obj, ['b', 'c']); // → { a: 1 }
    console.log(result);
}

/**
 * Picks only the specified keys from an object.
 */
function pickExample() {
    const obj = { a: 1, b: 2, c: 3 };
    const result = _.pick(obj, ['b', 'c']); // → { b: 2, c: 3 }
    console.log(result);
}

/**
 * Deep merges two objects.
 */
function mergeExample() {
    const obj1 = { a: 1, b: { x: 10 } };
    const obj2 = { b: { y: 20 } };
    const result = _.merge(obj1, obj2);
    console.log(result); // { a: 1, b: { x: 10, y: 20 } }
}

/**
 * Capitalizes the first letter of a string.
 */
function capitalizeExample() {
    const result = _.capitalize('hello world'); // → 'Hello world'
    console.log(result);
}

/**
 * Converts a string to kebab-case.
 */
function kebabCaseExample() {
    const result = _.kebabCase('Hello World Example'); // → 'hello-world-example'
    console.log(result);
}

/**
 * Converts a string to camelCase.
 */
function camelCaseExample() {
    const result = _.camelCase('Hello World Example'); // → 'helloWorldExample'
    console.log(result);
}

/**
 * Converts a string to snake_case.
 */
function snakeCaseExample() {
    const result = _.snakeCase('Hello World Example'); // → 'hello_world_example'
    console.log(result);
}

/**
 * Maps over a collection and modifies values.
 */
function mapExample() {
    const result = _.map([1, 2, 3], n => n * 2); // → [2, 4, 6]
    console.log(result);
}

/**
 * Filters values that match a condition.
 */
function filterExample() {
    const result = _.filter([1, 2, 3, 4], n => n > 2); // → [3, 4]
    console.log(result);
}

/**
 * Finds the first value that matches a condition.
 */
function findExample() {
    const result = _.find([1, 2, 3, 4], n => n > 2); // → 3
    console.log(result);
}

/**
 * Reduces an array to a single value.
 */
function reduceExample() {
    const result = _.reduce([1, 2, 3], (sum, n) => sum + n, 0); // → 6
    console.log(result);
}

/**
 * Generates a random number between min and max.
 */
function randomExample() {
    const result = _.random(1, 100);
    console.log(result); // Random number between 1-100
}

/**
 * Delays function execution until after `wait` ms.
 */
function debounceExample() {
    const log = _.debounce(() => console.log('Hello after delay'), 1000);
    log(); // Will only execute if no other calls occur within 1 second
}

/**
 * Ensures function is called at most once per `wait` ms.
 */
function throttleExample() {
    const log = _.throttle(() => console.log('Throttled log'), 1000);
    log(); // If called multiple times, it will execute only once per second
}

/**
 * Deep clones an object, creating a new reference.
 */
function cloneDeepExample() {
    const obj = { a: { b: 2 } };
    const copy = _.cloneDeep(obj);
    console.log(copy); // A separate copy of the object
}

/**
 * Calls a function N times.
 */
function timesExample() {
    _.times(3, () => console.log('Hello')); // Logs 'Hello' 3 times
}

// chunkExample();
// compactExample();
// differenceExample();
// dropExample();
// uniqExample();
// getExample();
// setExample();
// omitExample();
// pickExample();
// mergeExample();
// capitalizeExample();
// kebabCaseExample();
// camelCaseExample();
// snakeCaseExample();
// mapExample();
// filterExample();
// findExample();
// reduceExample();
// randomExample();
// debounceExample();
// throttleExample();
// cloneDeepExample();
// timesExample();


const items = [1, [2, [3, [4, [5, [6, [7, [8, [9, [0]]]]]]]]]];

const newItems = _.flattenDeep(items);//takes the deeply nested array and flattens it into a single-level array.
console.log(newItems);//It converts a deeply nested array into a normal, one-dimensional array.