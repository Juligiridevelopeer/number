// Call the function before its declaration to observe hoisting (will cause an error)
try {
    console.log(multiplyNumbers(4, 5)); // This will throw a TypeError: multiplyNumbers is not a function
} catch (error) {
    console.error('Error:', error.message);
}

// Function expression (assigned to a variable)
const multiplyNumbers = function(a, b) {
    return a * b;
};

// Now call the function after its declaration
console.log(multiplyNumbers(4, 5)); // Output: 20
