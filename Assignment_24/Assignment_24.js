/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons,
write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
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
if (student.car.toLowerCase() == "subara") {
    console.log(`car is : ${student.car}`);
}
else if (student.car.toLowerCase() != "subara") {
    console.log(`car is not subara`);
}
if (student.model == 2021) {
    console.log(`model is : ${student.model}`);
}
else if (student.model != 2021) {
    console.log(`model is not 2021`);
}
if (student.CC <= 1800) {
    console.log(`car CC is : ${student.CC}`);
}
else if (student.CC > 1800) {
    console.log(`car CC is greater than 1800`);
}
if (student.Avg >= 14) {
    console.log(`Avg is : ${student.Avg}`);
}
else if (student.Avg < 14) {
    console.log(`Avg is less than 14`);
}
if (student.Color == "Black") {
    console.log(`color is is : ${student.Color}`);
}
else if (student.Color != "Black") {
    console.log(`color is not Black`);
}
if (student.CC <= 1800 && student.Avg >= 14) {
    console.log("Good conditioned car");
}
if (student.Color == "Black" || student.Color == "Bue") {
    console.log(`Color of car is my fav`);
}
if (Array.isArray(keys)) {
    console.log("Yes, keys is an array");
}
else {
    console.log("Keys is not an array");
}
if (!(Array.isArray(student))) {
    console.log("Given input is not an array");
}
else {
    console.log("Given input is an array");
}
export {};
