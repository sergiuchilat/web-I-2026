function multipleParametersFunction(...args) {
    console.log(args);
}

multipleParametersFunction(1);
multipleParametersFunction(1, 2, 3, 4, 5);
multipleParametersFunction()

const originalProducs = {
    name: "Laptop",
    price: 1200
}

let copiedProducts = originalProducs

console.log("Before modification:");
console.log("Original Products:", originalProducs);
console.log("Copied Products:", copiedProducts);

copiedProducts.price = 1000;

console.log("After modification:");
console.log("Original Products:", originalProducs);
console.log("Copied Products:", copiedProducts);

copiedProducts = { ...originalProducs };

copiedProducts.price = 800;

console.log("After creating a true copy and modification:");
console.log("Original Products:", originalProducs);
console.log("Copied Products:", copiedProducts);


const n1 = 1;
const n2 = 2;
const n3 = 3;
const n4 = 4;
const n5 = 5;
const n6 = 6;
const packedArray = [n1, n2, n3, n4, n5, n6];
console.log("Packed Array:", packedArray);

const unpackedArray = [...packedArray];
console.log("Unpacked Array:", unpackedArray);

//multiple variable assignment

const [first, second, third, ...rest] = [1, 2, 3, 100, 101, 102];
console.log("First:", first);
console.log("Second:", second);
console.log("Third:", third);
console.log("Rest:", rest);
