#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

console.log(chalk.bold.green.underline("WELCOME in Todos list. Plan Your day adding task. \n"))
let todos: string[] = [];

async function createTodo (todos: string[]){

    do {
let ans = await inquirer.prompt({
    type: "list",
    name: "select",
    message: (chalk.bold.magenta("Select desired operation")),
    choices: ["Add", "Update", "View", "Delete", "Exit"]
});
if (ans.select =="Add") {
    let addTodo = await inquirer.prompt({
        type: "input",
        name: "todo",
        message: (chalk.bold.cyanBright("Add item..."))
 });
 todos.push(addTodo.todo)
}
if (ans.select =="Update") {
    let updateTodo = await inquirer.prompt({
        type: "list",
        name: "todo",
        message: (chalk.bold.green("select item for update")),
        choices:todos.map(item => item)
    })
    let addTodo = await inquirer.prompt({
        type: "input",
        name: "todo",
        message: (chalk.bold.blue("Add item...")),
    })
    let newTodos = todos.filter(val => val !== updateTodo.todo)
    todos = [...newTodos,addTodo.todo]
}
if (ans.select =="View") {
    console.log(todos)
}
if (ans.select =="Delete") {
    let deleteTodo = await inquirer.prompt({
    type: "list",
    name: "todo",
    message: (chalk.bold.red("select item to delete")),
    choices:todos.map(item => item)
})
let newTodos = todos.filter(val => val !== deleteTodo.todo)
todos = [...newTodos]

}
if (ans.select =="Exit") {
    process.exit();    
}

    } while(true);
}
createTodo(todos);