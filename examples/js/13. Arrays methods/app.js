const numbers = [1, 2, 3, 4, 5, -5, -23, 17, 8];


const negativeNumbersWithFor = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        negativeNumbersWithFor.push(numbers[i]);
    }
}
console.log("Negative numbers using for loop:", negativeNumbersWithFor);

const negativeNumbers = numbers.filter((num) => num < 0);
console.log("Negative numbers in the array:", negativeNumbers);


const squaredNumbersWithFor = [];
for (let i = 0; i < numbers.length; i++) {
    squaredNumbersWithFor.push(numbers[i] ** 2);
}
console.log("Squared numbers using for loop:", squaredNumbersWithFor);

const squaredNumbers = numbers.map((num) => num ** 2);
console.log("Squared numbers in the array:", squaredNumbers);


let sumOfNumbersWithFor = 0;
for (let i = 0; i < numbers.length; i++) {
    sumOfNumbersWithFor += numbers[i];
}
console.log("Sum of numbers using for loop:", sumOfNumbersWithFor);

const sumOfNumbers = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum of numbers in the array:", sumOfNumbers);

const productOfNumbers = numbers.reduce((accumulator, current) => accumulator * current, 1);
console.log("Product of numbers in the array:", productOfNumbers);


const elements = ['a', 'b', 'c', 'd', 'e'];
console.log("Original elements array:", elements);

elements.splice(2, 0);
console.log("After splice(2, 0):", elements);

elements.splice(2, 1);
console.log("After splice(2, 1):", elements);

elements.splice(2, 2);
console.log("After splice(2, 2):", elements);

elements.splice(2, 1, 3, 4);
console.log("After splice(2, 1, 3, 4):", elements);

elements.splice(2, 1, 'x', 'y', 'z');
console.log("After splice(2, 1, 'x', 'y', 'z'):", elements);

const otherElements = ['a', 'b','c', 'd', 'e'];
otherElements.splice(-3, 0, 'x', 'y');
console.log("After splice(-3, 0, 'x', 'y'):", otherElements);

const letters = ['a', 'b', 'c', 'd', 'e'];
console.log("Original letters array:", letters);

const subArray1 = letters.slice(1, 4);
console.log("slice(1, 4):", subArray1);

const subArray2 = letters.slice(2);
console.log("slice(2):", subArray2);

const subArray3 = letters.slice(-3);
console.log("slice(-3):", subArray3);

const subArray4 = letters.slice();
console.log("slice() (copy of the array):", subArray4);

let originalArray = [1, 2, 3, 4, 5];
let copiedArray = originalArray;
const anotherCopiedArray = originalArray.slice();

console.log("Original array before modification:", originalArray);
console.log("Copied array before modification:", copiedArray);
console.log("Another copied array before modification:", anotherCopiedArray);

originalArray[3] = 99;

console.log("Original array after modification:", originalArray);
console.log("Copied array after modification (affected by change in original):", copiedArray);
console.log("Another copied array after modification (remains unchanged):", anotherCopiedArray);


const unorderedArray = [5, 2, 9, 1, 5, 6];
console.log("Unordered array:", unorderedArray);
console.log("Sorted array (default ASC):", unorderedArray.sort());
console.log("Sorted array (DESC):", unorderedArray.sort((a, b) => b - a));

const stringArray = ['banana', 'apple', 'cherry', 'date'];
console.log("String array:", stringArray);
console.log("Sorted string array (DESC):", stringArray.reverse());
