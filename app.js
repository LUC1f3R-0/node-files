const _ = require('lodash')

const items = [1, [2, [3, [4, [5, [6, [7, [8, [9, [0]]]]]]]]]];

const newItems = _.flattenDeep(items);//takes the deeply nested array and flattens it into a single-level array.
console.log(newItems);//It converts a deeply nested array into a normal, one-dimensional array.