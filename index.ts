#!   /usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";

let todoList: string[] = [];

let condition = true;

console.log(chalk.bold.blue("\n \tWelcome to my Todo Application\n"));

let main = async () => {
  while (condition) {
    let options = await inquirer.prompt([
      {
        name: "choice",
        message: "Select an option you want to do:",
        type: "list",
        choices: [
          "Add Task",
          "Delete Task",
          "Update Task",
          "View Todo-List",
          chalk.red("Exit"),
        ],
      },
    ]);
    if (options.choice === "Add Task") {
      await addTask();
    } else if (options.choice === "Delete Task") {
      await deleteTask();
    } else if (options.choice === "Update Task") {
      await updateTask();
    } else if (options.choice === "View Todo-List") {
      await viewTask();
    } else if (options.choice === "Exit") {
      condition = false;
    }
  }
};

//add task
let addTask = async () => {
  let addNewTask = await inquirer.prompt([
    {
      name: "task",
      type: "input",
      message: "Enter your new task :",
    },
  ]);
  todoList.push(addNewTask.task);
  console.log(`${addNewTask.task} task added in todo list successfully`);
};

//delete task
let deleteTask = async () => {
  await viewTask();
  let taskIndex = await inquirer.prompt([
    {
      name: "index",
      type: "number",
      message: "Enter the index number of the task you want to delete : ",
    },
  ]);
  let deletedTask = todoList.splice(taskIndex.index -1, 1);
  console.log(
    `\n"${deletedTask}" This task has been deleted successfully from your Todo-List`
  );
};

//update task
let updateTask = async () => {
  await viewTask();
  let updateList = await inquirer.prompt([
    {
      name: "update",
      type: "number",
      message: "Enter the index number of the task you want to update :",
    },
    {
      name: "newUpdatedTask",
      type: "input",
      message: "Now Enter new task name :",
    },
  ]);
  todoList[updateList.update -1] = updateList.newUpdatedTask;
  console.log(
    `\nTask at index no. ${updateList.update -1} updated successfully [For updated list check option : "View Todo-List"]`
  );
};
//view task
let viewTask = async () => {
  console.log("\nView Todo List\n");
  todoList.forEach((task, index) => {
    console.log(`${index +1} : ${task}`);
  });
};

main();
