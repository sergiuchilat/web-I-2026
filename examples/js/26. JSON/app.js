// Sender APP - Creating object
const person = {
    name: "John Doe",
    age: 30,
    city: "New York",
    hobbies: ["reading", "traveling", "coding"],
    address: {
        street: "123 Main St",
        zip: "10001"
    }
};


console.log("Person Object:", person);
// Converting object to JSON string
const personJSON = JSON.stringify(person);
console.log("Person JSON String:", personJSON);

// Receiver APP - Parsing JSON string back to object
const parsedPerson = JSON.parse(personJSON);
console.log("Parsed Person Object:", parsedPerson);