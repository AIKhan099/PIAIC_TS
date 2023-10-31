/*
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

*/
let arr = ["awais", "imran", "khan"];
let PersonLeavingParty = "imran";
let NewPersonCalngForParty = "umair";
let indexOfPersonLeavngParty = arr.indexOf(PersonLeavingParty);
arr.splice(indexOfPersonLeavngParty, 1, NewPersonCalngForParty);
arr.unshift("babar");
arr.push("nawaz");
for (let i = 0; i < arr.length; i++) {
    console.log(` Hello, ${arr[i]}!, you are invited for the party`);
}
console.log(`${PersonLeavingParty} can't come`);
export {};
