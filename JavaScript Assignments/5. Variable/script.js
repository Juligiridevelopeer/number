// Block scope
{
    // Attempt to log the value of a let variable before assignment
    try {
        console.log(letVariable); // This will throw a ReferenceError
    } catch (error) {
        console.error('Error:', error.message);
    }

    let letVariable = 'Value assigned to letVariable'; // Declaration and assignment with let

    // Log the value of the let variable after assignment
    console.log('After assignment, letVariable:', letVariable); // Output: Value assigned to letVariable
}

// Outside the block scope, the let variable is not accessible
// console.log(letVariable); // ReferenceError: letVariable is not defined
