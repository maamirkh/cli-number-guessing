#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number:",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulation! You guessed a right number.");
    console.log(`Your guessed number is ${answers.userGuessedNumber}`);
    console.log(`Computer generated number is ${randomNumber}`);
}
else {
    console.log("You guessed wrong number");
    console.log(`Computer generated number is ${randomNumber}`);
    console.log(`Your guessed number is ${answers.userGuessedNumber}`);
}
