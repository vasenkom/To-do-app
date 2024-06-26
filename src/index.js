import _ from "lodash";
import "./style.css";
import { greetFunction } from "./greetings.js";
import { createAddTaskDialog } from "./dialog.js";
import { createTask } from "./newToDo.js";

export const contentBox = document.querySelector("#content");
const addTodoButton = document.querySelector(".addButton");

// Initialize the greeting
greetFunction();

// Create and append the addTaskDialogHTML
const addTaskDialogHTML = createAddTaskDialog(contentBox, addTodoButton);

// Add event listener to open dialog for task adding
addTodoButton.addEventListener("click", () => {
  addTaskDialogHTML.showModal();
});
