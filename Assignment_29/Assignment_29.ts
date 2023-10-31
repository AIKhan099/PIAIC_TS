/*
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for 
certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array,
 the if block should print a statement, such as You really like bananas!
*/

import inquirer from "inquirer";
import chalk from "chalk";


let fav_fruit= ["banana","apple","guava"];
let fruit_to_check = ["mango","apple","grapes","peach","guava"]

for( let fruit=0 ; fruit <= fruit_to_check.length; fruit++ ){
    
    if(fav_fruit.includes(fruit_to_check[fruit])){
        console.log(chalk.bgGreenBright("Your fav fruit is ",fruit_to_check[fruit]))
    }
}

export { }