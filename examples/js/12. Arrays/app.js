const n1 = 1;
const n2 = 2;
const n3 = 3;
const n4 = 4;
const n5 = 5;
const n6 = 6;

console.log("Individual numbers:");
console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
console.log(n5);
console.log(n6);

if (n1 % 2 === 0) {
    console.log(n1, "is even");
}
if (n2 % 2 === 0) {
    console.log(n2, "is even");
}
if (n3 % 2 === 0) {
    console.log(n3, "is even");
}
if (n4 % 2 === 0) {
    console.log(n4, "is even");
}
if (n5 % 2 === 0) {
    console.log(n5, "is even");
}
if (n6 % 2 === 0) {
    console.log(n6, "is even");
}

const numbersArray = [1, 2, 3, 4, 5, 6];

console.log("Numbers in an array:");
console.log(numbersArray);

for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] % 2 === 0) {
        console.log(numbersArray[i], "is even");
    }
}