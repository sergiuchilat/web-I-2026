const person = ["Adrian", "Ciobanu", 100000, 9.87, "ciobanuandrian230423@gmail.com", "12.12.2004", "s. Recea", "Riscani", "Balti", "067144463", "0611111112"]
console.log(person)

console.log('Birthdate:', person[4]);


const personObj = {
    firstName: "Adrian",
    lastName: "Ciobanu",
    salary: 100000,
    gpa: 9.87,
    email: "ciobanuandrian230423@gmail.com",
    telegram: "ciobanuadrian230423",
    birthdate: "12.12.2004",
    address: {
        street: "s. Recea",
        district: "Riscani"
    },
    studyCity: "Balti",
    phoneNumbers: {
        primary: "067144463",
        secondary: "0611111112"
    }
};

console.log(personObj);
console.log('Birthdate:', personObj.birthdate);
console.log('District:', personObj.address.district);
console.log('Primary Phone Number:', personObj.phoneNumbers.primary);