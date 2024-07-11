import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let condition = true;
console.log(chalk.bold.blue("\n \tWelcome to my Todo Application\n"));
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.blueBright("Enter your new task")
        }
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} task added in Todo-List Successfully`);
    let addMoreTask = await inquirer.prompt([
        {
            name: "anotherTask",
            type: "confirm",
            message: chalk.blueBright("Do you want to add more task ?"),
            default: false
        }
    ]);
    condition = addMoreTask.anotherTask;
}
console.log("Your updated Todo list:", todoList);
