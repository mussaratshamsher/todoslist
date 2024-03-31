#! /usr/bin/env node


import inquirer from "inquirer"
import chalk from "chalk"
let todos = [];

let condition = true;
console.log(chalk.bold.green.underline("WELCOME in Todos list. \n"))

while(condition) {
 let addTask = await inquirer.prompt(
    [
        {
         name: "todo",
         type: "input",
         message: (chalk.bold.yellow("What do you want to add in your Todos? \n"))
        },{
            name: "addMore",
            type: "confirm",
            message: (chalk.bold.cyan("Do you want to add more?")),
            default: "false"
        }
    ]
 )

 todos.push(addTask.todo);
 condition = addTask.addMore;
console.log(chalk.bold.magenta(todos));
};