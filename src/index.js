import "./style.css";
import { addImagesToButtons } from "./DOM.js";
import { greetFunction } from "./greetings.js";
import { addDefaultTask } from "./defaultTask.js";
import { setupEventListeners } from "./eventListeners.js";
import { addCheckboxListeners } from "./eventListeners.js";
import { createAddTaskDialog } from "./dialog.js";
import {
  contentBox,
  addTodoButton,
  addTodoButton2,
  todaySortButton,
  allTasksButton,
  checkBoxM,
} from "./domElements.js";

addImagesToButtons();

// Initialize the greeting
greetFunction();

// Adds default task
addDefaultTask();

setupEventListeners();
addCheckboxListeners();
