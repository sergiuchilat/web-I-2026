const a = 2
const b = 3

if (a > b) {
    console.log(`${a} is greater than ${b}`)
} else {
    console.log(`${a} is not greater than ${b}`)
}


const digit = 11;
if (digit === 0) {
    console.log("You selected Zero");
} else if (digit === 1) {
    console.log("You selected One");
} else if (digit === 2) {
    console.log("You selected Two");
} else if (digit === 3) {
    console.log("You selected Three");
} else if (digit === 4) {
    console.log("You selected Four");
} else if (digit === 5) {
    console.log("You selected Five");
} else if (digit === 6) {
    console.log("You selected Six");
} else if (digit === 7) {
    console.log("You selected Seven");
} else if (digit === 8) {
    console.log("You selected Eight");
} else if (digit === 9) {
    console.log("You selected Nine");
} else {
    console.log("This is not a single digit number");
}

switch (digit) {
    case 0:
        console.log("You selected Zero");
        break;
    case 1:
        console.log("You selected One");
        break;
    case 2:
        console.log("You selected Two");
        break;
    case 3:
        console.log("You selected Three");
        break;
    case 4:
        console.log("You selected Four");
        break;
    case 5:
        console.log("You selected Five");
        break;
    case 6:
        console.log("You selected Six");
        break;
    case 7:
        console.log("You selected Seven");
        break;
    case 8:
        console.log("You selected Eight");
        break;
    case 9:
        console.log("You selected Nine");
        break;
    default:
        console.log("This is not a single digit number");
}