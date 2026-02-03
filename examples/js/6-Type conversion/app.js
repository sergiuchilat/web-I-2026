const stringValue = "123";

console.log("Original string value:", stringValue);

console.log("String to Number:", Number(stringValue));

const a = "5a";
const b = "10";

console.log("String '5a' to Number:", Number(a)); // NaN
console.log("String '10' to Number:", Number(b)); // 10

const booleadnTrue = true;
const booleanFalse = false;

console.log("Boolean true to Number:", Number(booleadnTrue)); // 1
console.log("Boolean false to Number:", Number(booleanFalse)); // 0

const numberValue = 456;

console.log("Original number value:", numberValue);
console.log("Number to String:", String(numberValue));

const strintBooleanTrue = "true";
const strintBooleanFalse = "false";
/* 
False values in JavaScript are:
- false
- 0
- -0
- 0n (BigInt zero)
- "", '', `` (empty strings)
- null
- undefined
- NaN
*/

console.log("String 'true' to Boolean:", Boolean(strintBooleanTrue)); // true
console.log("String 'false' to Boolean:", Boolean(strintBooleanFalse)); // true