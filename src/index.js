import _ from "lodash";
import "./style.css";
import { greetFunction } from "./greetings.js";
import { createAddTaskDialog } from "./dialog.js";
import { createTask } from "./newToDo.js";
import star from "./star.png";
import add from "./plus4.png";
import allPapers from "./allTasks.png";

export const contentBox = document.querySelector("#content");
const addTodoButton = document.querySelector(".addButton");

// Add star img to Today button
const imgholderAdd = document.querySelector(".imgholderAdd");
const addImage = document.createElement("img");
addImage.classList.add("addImage");
addImage.src = add;
imgholderAdd.appendChild(addImage);

// Add star img to Today button
const imgholderStar = document.querySelector(".imgholderStar");
const starImage = document.createElement("img");
starImage.classList.add("starImage");
starImage.src = star;
imgholderStar.appendChild(starImage);

// Add star img to Today button
const imgholderAll = document.querySelector(".imgholderAll");
const allTasksImage = document.createElement("img");
allTasksImage.classList.add("allTasksImage");
allTasksImage.src = allPapers;
imgholderAll.appendChild(allTasksImage);

// Initialize the greeting
greetFunction();

// Create and append the addTaskDialogHTML
const addTaskDialogHTML = createAddTaskDialog(contentBox, addTodoButton);

// Add event listener to open dialog for task adding
addTodoButton.addEventListener("click", () => {
  addTaskDialogHTML.showModal();
});
