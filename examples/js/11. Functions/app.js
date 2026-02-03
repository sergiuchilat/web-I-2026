// a * x^2 + b * x + c = 0 

function calculateQuadraticRoots(a, b, c) {
    const discriminant = b**2 - 4*a*c;

    if (discriminant < 0){
        console.log("No real roots exist");
    } else if (discriminant === 0){
        const root = -b / (2*a);
        console.log("One real root exists:", root);
    } else {
        const root1 = (-b + Math.sqrt(discriminant)) / (2*a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2*a);
        console.log("Two real roots exist:", root1, "and", root2);
    }
}


calculateQuadraticRoots(1, -3, 2);  // Two real roots exist: 2 and 1
calculateQuadraticRoots(1, 2, 1);   // One real root exists: -1
calculateQuadraticRoots(1, 0, 1);   // No real roots exist
calculateQuadraticRoots(2, -7, 3);  // Two real roots exist: 3 and 0.5
calculateQuadraticRoots(1, -4, 5);  // No real roots exist


// Type of function declaration

// Classical function declaration
function add(a, b) {
    return a + b;
}
console.log("Classical function declaration:", add(2, 3)); // 5

// Function expression
const subtract = function(a, b) {
    return a - b;
};
console.log("Function expression:", subtract(5, 2)); // 3

// Arrow function
const doubleOfNumber = (n) => n * 2;
console.log("Arrow function:", doubleOfNumber(6)); // 12

// Immediately Invoked Function Expression (IIFE)
(function(message) {
    console.log("IIFE says:", message);
})("Hello from IIFE!");