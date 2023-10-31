/*
Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will
print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
*/
import chalk from "chalk";
let users = ["ali", "adam", "admin", "awais", "ahsan"];
for (let user = 0; user < users.length; user++) {
    if (users[user] == "admin") {
        console.log(chalk.bgGreenBright("Hello admin, would you like to see a status report?"));
    }
    else {
        console.log(chalk.bgYellowBright(`Hello ${users[user]}, thank you for logging in again.`));
    }
}
