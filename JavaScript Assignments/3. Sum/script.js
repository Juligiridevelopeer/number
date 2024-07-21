function sumNumbers(a, b) {
    console.log('Before assignment, varVariable:', varVariable); // Output: undefined
    var varVariable; // Variable declaration (hoisted to the top of the function scope)
    varVariable = a + b; // Variable assignment

    return varVariable; // Return the sum of a and b
}

// Call the function to demonstrate
const result = sumNumbers(5, 3);
console.log('Sum:', result); // Output: Sum: 8
