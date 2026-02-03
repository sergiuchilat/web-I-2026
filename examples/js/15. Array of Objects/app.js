const listOfStudents = [
    { name: "Alice", age: 20, grade: 9.5 },
    { name: "Bob", age: 22, grade: 8.0 },
    { name: "Charlie", age: 19, grade: 7.5 },
    { name: "David", age: 21, grade: 6.0 },
    { name: "Eve", age: 20, grade: 10.0 }
];

console.log("List of Students:");
console.log(listOfStudents);

console.log("\nStudents who passed (grade >= 8):", listOfStudents.filter(student => student.grade >= 8)); 
console.log('Increase age of each student by 1 year:', listOfStudents.map(student => ({ ...student, age: student.age + 1 })));