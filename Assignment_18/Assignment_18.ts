/*
Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/

// let arr = new Array("umair","awais","jawad","imran","khan");
let arr = ["umair","awais","jawad","imran","khan"];
// arr.unshift(5);
console.log("orinal array :" + arr);
// deep copying through slice, this will not let change to be happened in original array i.e. arr but will affect only alpha_order
let alpha_order = arr.slice().sort();
console.log("Alphabetical order ", alpha_order);
console.log("orinal array :" , arr);
console.log(" Reverse Alphabetical order ", alpha_order.sort().reverse())
console.log("orinal array :" , arr);
console.log(" Reverse order ", arr.reverse())
console.log(" Reverse + Reverse order ", arr.reverse())
console.log("Alphabetical order ", alpha_order.sort())
console.log("orinal array :" , arr);
// let cant_come = arr.pop();
// arr.push("niazi");
// console.log(`array : ${arr}`);
// console.log("array :" + arr);
// arr.unshift("umair");
// arr.splice(2,0,"hassan");
// let arr_length = arr.length;
// arr.sort();
// console.log("array :" + arr);
// console.log(`sorted array : ${arr.sort()}`);

// var ar = new Array("orange", "mango", "banana", "sugar"); 
// ar.unshift("water"); 
// console.log("Returned array is : " + ar );
// export { }