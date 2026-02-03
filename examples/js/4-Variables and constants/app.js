let x = 2;
let y = 3;

console.log("Initial values:");
console.log("x =", x);
console.log("y =", y);

x = 5;
y = 7;

console.log("Updated values:");
console.log("x =", x);
console.log("y =", y);


const PI = 3.14159;
console.log("Value of PI:", PI);

// Uncommenting the following line will cause an error because PI is a constant
//PI = 3.14; // This will throw an error: TypeError: Assignment to constant variable.

/* 
multiline comments
*/



var a = 10;

for (let i = 0; i < 1; i++) {
    var internalVariableA = 20;
    let internalVariableB = 30;

    // internalVariableA is not destroyed after the loop because it is declared with var
    // internalVariableB is destroyed after the loop because it is declared with let
}

console.log("internalVariableA =", internalVariableA);
console.log("internalVariableB =", internalVariableB);


console.log("End of the script.");