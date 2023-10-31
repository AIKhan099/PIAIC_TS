/*
No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
import chalk from "chalk";
let users = ["ali", "adam", "admin", "awais", "ahsan"];
let initial_len = users.length;
for (let user = 0; user < initial_len; user++) {
    users.pop();
    console.log(users.length, " users are leftt");
    if (users.length == 0) {
        console.log(chalk.bgRedBright("We need some users"));
    }
}
