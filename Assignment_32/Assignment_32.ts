/*
Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the 
person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/

import inquirer from "inquirer";
import chalk from "chalk";

let current_users = ["Ali", "adam", "ASIM", "awais", "ahsan"];
let new_users = ["Ali", "adam", "usman", "awais", "usim"];

// converting current users to lower case
for (let user = 0; user < current_users.length; user++){
    let pp = current_users[user].toLowerCase();
    console.log(pp, typeof pp);
    current_users.splice(user, 1, pp)
    
}
console.log(current_users);
// solving main assignment work
for (let user = 0; user < new_users.length; user++) {

    if (current_users.includes(new_users[user].toLowerCase())) {
        console.log(chalk.bgRedBright(new_users[user], " need to enter a new username."));
    }
    else{
        console.log(chalk.bgGreenBright(new_users[user], " username is available."));
    }
}

export { }