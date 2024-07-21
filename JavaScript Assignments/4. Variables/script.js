// Block scope
{
    console.log('Before declarations:');
    console.log('letVariable:', letVariable); // Output: ReferenceError: Cannot access 'letVariable' before initialization
    console.log('varVariable:', varVariable); // Output: undefined
    console.log('constVariable:', constVariable); // Output: ReferenceError: Cannot access 'constVariable' before initialization

    let letVariable = 'Value assigned to letVariable'; // Declaration and assignment with let
    var varVariable = 'Value assigned to varVariable'; // Declaration and assignment with var
    const constVariable = 'Value assigned to constVariable'; // Declaration and assignment with const

    console.log('After declarations:');
    console.log('letVariable:', letVariable); // Output: Value assigned to letVariable
    console.log('varVariable:', varVariable); // Output: Value assigned to varVariable
    console.log('constVariable:', constVariable); // Output: Value assigned to constVariable
}

// Outside the block scope, these variables are not accessible
// console.log(letVariable); // ReferenceError: letVariable is not defined
// console.log(varVariable); // ReferenceError: varVariable is not defined
// console.log(constVariable); // ReferenceError: constVariable is not defined
