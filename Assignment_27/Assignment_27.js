/*
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/
import chalk from "chalk";
// let alient_color = "green";
let alient_color = "red";
// let alient_color = "yellow";
if (alient_color == "green") {
    console.log(chalk.green(`Player just earned 5 points`));
}
else if (alient_color == "red") {
    console.log(chalk.red(`Player just earned 15 points`));
}
else if (alient_color == "yellow") {
    console.log(chalk.yellow(`Player just earned 20 points`));
}
