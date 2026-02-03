const a = 2;
const b = 3;
const c = '3'
const d = 0;
const e = null;
const f = undefined;

console.log("a == b:", a == b); // true
console.log("a === b:", a === b); // true
console.log("a == c:", a == c); // true
console.log("a === c:", a === c); // false
console.log("d == e:", d == e)
console.log("d === e:", d === e)
console.log("d == f:", d == f)
console.log("d == f:", d === f)
console.log("e == f:", e == f)
console.log("e == f:", e === f)


console.log("a > b:", a > b); // false
console.log("a < b:", a < b);   // true
console.log("a >= b:", a >= b); // false
console.log("a <= b:", a <= b); // true

console.log("b != c:", b != c);
console.log("b !== c:", b !== c);

console.log("Logical AND (a < b && a === 2):", a < b && a === 2); // true
console.log("Logical OR (a > b || a === 2):", a > b || a === 2); // true
console.log("Logical NOT (!(a < b)):", !(a < b)); // false



