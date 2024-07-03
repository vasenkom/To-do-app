import { showTaskOnScreen } from "./taskDOM.js";
import { markTaskCompletion } from "./doneTask.js";
import { groupTasksByDate } from "./taskDOM.js";
import { showTodayTask } from "./todayTask.js";
import {
  contentBox,
  addTodoButton,
  addTodoButton2,
  todaySortButton,
  allTasksButton,
  checkBoxM,
} from "./domElements.js";
import { createAddTaskDialog } from "./dialog.js";

export function setupEventListeners() {
  const addTaskDialogHTML = createAddTaskDialog(contentBox, addTodoButton);

  addTodoButton.addEventListener("click", () => {
    addTaskDialogHTML.showModal();
  });

  addTodoButton2.addEventListener("click", () => {
    addTaskDialogHTML.showModal();
  });

  todaySortButton.addEventListener("click", () => {
    showTodayTask();
    showTaskOnScreen(showTodayTask());
  });

  allTasksButton.addEventListener("click", () => {
    groupTasksByDate();
    showTaskOnScreen(groupTasksByDate());
    console.log("hi"); //debugging
  });
}

export function addCheckboxListeners() {
  const checkBoxM = document.querySelectorAll(
    ".taskCheckBoxDiv input[type='checkbox']"
  );

  checkBoxM.forEach((checkBox, index) => {
    checkBox.addEventListener("change", () => {
      markTaskCompletion(index);
    });
  });
}
