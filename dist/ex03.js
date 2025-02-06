"use strict";
// Create a function called combine that can accept two numbers OR two strings.
// Use function overloading to define two versions of this function.
// If two numbers are passed, return their sum.
// If two strings are passed, return their concatenated (combined) value.
function combine(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error('Invalid arguments');
}
console.log(combine(10, 20)); // Expected output: 30
console.log(combine("Hello, ", "World!")); // Expected output: Hello, World!
