let x = 2;
const y = 3;

document.writeln(`The sum of ${x} and ${y} is ${x + y}.`);
document.writeln(`The difference of ${y} and ${x} is ${y - x}.`);


x = 5; // This will cause an error because x is a constant
document.writeln(`Now x is ${x}.`);


function debuggingExample() {
    let evenCounter = 0;
    let oddCounter = 0;
    for (let i = 0; i < 50; i++) {
        if(i % 2 === 0) {
            console.log(`${i} is even`);
            evenCounter++;
        } else {
            console.log(`${i} is odd`);
            oddCounter++;
        }
    }

    document.writeln(`Total even numbers: ${evenCounter}`);
    document.writeln(`Total odd numbers: ${oddCounter}`);
}

debuggingExample();