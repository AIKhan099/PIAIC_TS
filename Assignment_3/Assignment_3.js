/*
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
 */
let name_2 = `Awais`;
var sentence = name_2.toLowerCase().split(" ");
for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
}
console.log(`Uppercase: ${name_2.toUpperCase()} \n Lowercase: ${name_2.toLowerCase()} \n
titlecase: ${name_2[0].toUpperCase() + name_2.slice(1)} `);
console.log(`title case : ${sentence}`);
export {};
