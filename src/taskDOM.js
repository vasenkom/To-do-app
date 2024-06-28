import { todos } from "./newToDo";
import { contentBox } from "./index.js";

export function groupTasksByDate() {
  const groupedTasks = {};
  todos.forEach((task) => {
    if (!groupedTasks[task.dueDate]) {
      groupedTasks[task.dueDate] = [];
    }
    groupedTasks[task.dueDate].push(task);
  });
  return groupedTasks;
}

export function showTaskOnScreen() {
  let taskHolder = document.querySelector(".taskHolder");

  if (!taskHolder) {
    taskHolder = document.createElement("div");
    taskHolder.classList.add("taskHolder");
    contentBox.appendChild(taskHolder);
  }

  // Clear taskHolder content before using again
  taskHolder.innerHTML = "";

  const groupedTasks = groupTasksByDate();

  Object.keys(groupedTasks).forEach((dueDate) => {
    const dateHeader = document.createElement("div");
    dateHeader.classList.add("singleDateHolder");

    const singleDateDOM = document.createElement("p");
    singleDateDOM.classList.add("singleDateDOM");
    singleDateDOM.textContent = dueDate;
    dateHeader.appendChild(singleDateDOM);

    groupedTasks[dueDate].forEach((task) => {
      const toDoCard = document.createElement("div");
      toDoCard.classList.add("toDoCard");

      // Add the edit button with value "edit"
      const taskEditButton = document.createElement("button");
      taskEditButton.classList.add("taskEditButton");
      taskEditButton.textContent = "edit";
      toDoCard.appendChild(taskEditButton);

      // Add the delete button with value "x"
      const taskDeleteButton = document.createElement("button");
      taskDeleteButton.classList.add("taskDeleteButton");
      taskDeleteButton.textContent = "x";
      toDoCard.appendChild(taskDeleteButton);

      // Add checkbox
      const taskCheckBoxDiv = document.createElement("div");
      taskCheckBoxDiv.classList.add("taskCheckBoxDiv");
      const taskCheckBox = document.createElement("input");
      taskCheckBox.type = "checkbox";
      taskCheckBox.id = "readStatus";
      taskCheckBoxDiv.appendChild(taskCheckBox);
      toDoCard.appendChild(taskCheckBoxDiv);

      // Add the name of the task
      const taskNameDOM = document.createElement("p");
      taskNameDOM.textContent = task.name;
      taskNameDOM.classList.add("taskNameDOM");
      toDoCard.appendChild(taskNameDOM);

      // Add the description of the task
      const taskDescriptionDOM = document.createElement("p");
      taskDescriptionDOM.textContent = task.description;
      taskDescriptionDOM.classList.add("taskDescriptionDOM");
      toDoCard.appendChild(taskDescriptionDOM);

      dateHeader.appendChild(toDoCard);

      taskDeleteButton.addEventListener("click", function () {
        dateHeader.removeChild(toDoCard);
      });
    });

    taskHolder.appendChild(dateHeader);
  });
}
