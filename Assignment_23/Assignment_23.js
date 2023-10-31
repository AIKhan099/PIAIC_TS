/*
Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the
results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/
let student = {
    "car": 'subara',
    "model": 2021,
    "CC": 1800,
    "Avg": 14,
    "Color": "Black"
};
let keys = Object.keys(student);
console.log(Object.keys(student));
if (student.car == "subara") {
    console.log(`car is : ${student.car}`);
}
else if (student.car != "subara") {
    console.log(`car is not subara`);
}
if (student.model == 2021) {
    console.log(`model is : ${student.model}`);
}
else if (student.model != 2021) {
    console.log(`model is not 2021`);
}
if (student.CC == 1800) {
    console.log(`car CC is : ${student.CC}`);
}
else if (student.CC != 1800) {
    console.log(`car CC is not 1800`);
}
if (student.Avg == 14) {
    console.log(`Avg is : ${student.Avg}`);
}
else if (student.Avg != 14) {
    console.log(`Avg is not 14`);
}
if (student.Color == "Black") {
    console.log(`color is is : ${student.Color}`);
}
else if (student.Color != "Black") {
    console.log(`color is not Black`);
}
export {};
