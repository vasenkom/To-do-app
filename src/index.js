import "./style.css";
import { addImagesToButtons } from "./DOM.js";
import { greetFunction } from "./greetings.js";
import { addDefaultTask } from "./defaultTask.js";
import { setupEventListeners } from "./eventListeners.js";
import { addCheckboxListeners } from "./eventListeners.js";
import { showTaskOnScreen } from "./taskDOM.js";

addImagesToButtons();

// Initialize the greeting
greetFunction();

// Adds default task
addDefaultTask();

setupEventListeners();
addCheckboxListeners();

showTaskOnScreen();
