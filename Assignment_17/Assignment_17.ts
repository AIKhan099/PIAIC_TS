/*
Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.*/

let arr = ["awais","imran","khan"]

let PersonLeavingParty = "imran";
let NewPersonCalngForParty = "umair";
let indexOfPersonLeavngParty = arr.indexOf(PersonLeavingParty);

arr.splice(indexOfPersonLeavngParty,1,NewPersonCalngForParty);
arr.unshift("babar");
arr.push("nawaz");
console.log("arr is :" , arr);
for(let i=0; i<arr.length; i++){
    if(arr.length>2){
    let dont_come = arr.pop();
    console.log(`${dont_come} party is cancelled`);
    }
}
for(let i=0; i<arr.length; i++){
    
    console.log(`${arr[i]} come to the party on time`);
    
}
console.log(`Popping the remaining 2`);
arr.pop();
arr.pop();
console.log("arr is :" , arr);

// console.log(`${PersonLeavingParty} can't come`)

export { }