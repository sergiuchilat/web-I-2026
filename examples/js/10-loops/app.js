const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[2])
console.log(numbers[3])
console.log(numbers[4])
console.log(numbers[5])
console.log(numbers[6])
console.log(numbers[7])
console.log(numbers[8])
console.log(numbers[9])

console.log("Using a for loop:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


console.log("Using while loop:");
let i = 0;
while ( i < numbers.length) {
    console.log(numbers[i]);
    i++;
}

console.log("Using do while loop:");
i = 0;
do {
    console.log(numbers[i]);
    i++;
}while ( i < numbers.length)

// While vs do while example

let start = 1;
let end = 1;

console.log("While loop example:");
while (start < end) {
    console.log("Current number is:", start);
    start++;
}
console.log("While loop ended. Final value of start is:", start);

console.log("Do while loop example:");
start = 1; // reset start for do while example
do {
    console.log("Current number is:", start);
    start++;
} while (start < end)

console.log("Do while loop ended. Final value of start is:", start);


