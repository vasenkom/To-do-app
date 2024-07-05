import { contentBox } from "./domElements.js";
import trashcan from "./img/delete2.png";
import edit from "./img/edit.png";
import highPriority from "./img/highPriority.png";
import mediumPriority from "./img/mediumPriority.png";
import lowPriority from "./img/lowPriority.png";
import { getTodayDate, getTomorrowDate } from "./greetings.js";
import { createEditTaskDialogDOM } from "./editTask.js";

export function groupTasksByDate() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const groupedTasks = tasks.reduce((acc, task) => {
    if (!acc[task.dueDate]) {
      acc[task.dueDate] = [];
    }
    acc[task.dueDate].push(task);
    return acc;
  }, {});
  return groupedTasks;
}

export function showTaskOnScreen(groupedBy) {
  let taskHolder = document.querySelector(".taskHolder");

  if (!taskHolder) {
    taskHolder = document.createElement("div");
    taskHolder.classList.add("taskHolder");
    contentBox.appendChild(taskHolder);
  }

  // Clear taskHolder content before using again
  taskHolder.innerHTML = "";

  const groupedTasks = groupedBy || groupTasksByDate();

  Object.keys(groupedTasks).forEach((dueDate) => {
    const { dateHeader } = addTodayDateOnScreen(dueDate);

    groupedTasks[dueDate].forEach((task) => {
      const toDoCard = document.createElement("div");
      toDoCard.classList.add("toDoCard");

      // Add checkbox
      const taskCheckBoxDiv = document.createElement("div");
      taskCheckBoxDiv.classList.add("taskCheckBoxDiv");
      const taskCheckBox = document.createElement("input");
      taskCheckBox.type = "checkbox";
      taskCheckBox.checked = task.completed;
      taskCheckBox.dataset.taskId = task.id;
      taskCheckBoxDiv.appendChild(taskCheckBox);

      // Add the name of the task
      const taskNameDOM = document.createElement("p");
      taskNameDOM.textContent = task.name;
      taskNameDOM.classList.add("taskNameDOM");
      taskCheckBoxDiv.appendChild(taskNameDOM);

      // Add the edit button with value "edit"
      const taskEditButton = document.createElement("button");
      taskEditButton.classList.add("taskEditButton");
      const editTaskButtonImg = document.createElement("img");
      editTaskButtonImg.classList.add("editTaskButtonImg");
      editTaskButtonImg.src = edit;
      taskEditButton.appendChild(editTaskButtonImg);

      // Add the delete button
      const taskDeleteButton = document.createElement("button");
      taskDeleteButton.classList.add("taskDeleteButton");
      const deleteTaskButtonImg = document.createElement("img");
      deleteTaskButtonImg.classList.add("deleteTaskButtonImg");
      deleteTaskButtonImg.src = trashcan;
      taskDeleteButton.appendChild(deleteTaskButtonImg);

      // DIV for edit and delete button
      const editDeleteDiv = document.createElement("div");
      editDeleteDiv.classList.add("editDeleteDiv");
      editDeleteDiv.appendChild(taskEditButton);
      editDeleteDiv.appendChild(taskDeleteButton);

      // First line div
      const firstLineDiv = document.createElement("div");
      firstLineDiv.classList.add("firstLineDiv");
      firstLineDiv.appendChild(taskCheckBoxDiv);
      firstLineDiv.appendChild(editDeleteDiv);
      toDoCard.appendChild(firstLineDiv);

      // Add the description of the task
      const taskDescriptionDOM = document.createElement("p"); // Second line of the todo card
      taskDescriptionDOM.textContent = task.description;
      taskDescriptionDOM.classList.add("taskDescriptionDOM");
      toDoCard.appendChild(taskDescriptionDOM);

      dateHeader.appendChild(toDoCard);

      // Third line div that will have priority
      const thirdLineDiv = document.createElement("div");
      thirdLineDiv.classList.add("priorityDiv");

      // High priority img
      const highPriorityImg = document.createElement("img");
      highPriorityImg.classList.add("priorityImg");
      highPriorityImg.src = highPriority;
      const highPriorityText = document.createElement("span");
      highPriorityText.textContent = "High Priority";
      highPriorityText.classList.add("priorityText");

      // Medium priority img
      const mediumPriorityImg = document.createElement("img");
      mediumPriorityImg.classList.add("priorityImg");
      mediumPriorityImg.src = mediumPriority;
      const mediumPriorityText = document.createElement("span");
      mediumPriorityText.textContent = "Medium Priority";
      mediumPriorityText.classList.add("priorityText");

      // Low priority img
      const lowPriorityImg = document.createElement("img");
      lowPriorityImg.classList.add("priorityImg");
      lowPriorityImg.src = lowPriority;
      const lowPriorityText = document.createElement("span");
      lowPriorityText.textContent = "Low Priority";
      lowPriorityText.classList.add("priorityText");

      // Check and append based on task priority
      if (task.priority == "high" || task.priority == "High") {
        thirdLineDiv.style.backgroundColor = "#fddfdf";
        thirdLineDiv.appendChild(highPriorityImg);
        thirdLineDiv.appendChild(highPriorityText);
      } else if (task.priority == "medium" || task.priority == "Medium") {
        thirdLineDiv.style.backgroundColor = "#ffffc9";
        thirdLineDiv.appendChild(mediumPriorityImg);
        thirdLineDiv.appendChild(mediumPriorityText);
      } else if (task.priority == "low" || task.priority == "Low") {
        thirdLineDiv.style.backgroundColor = "#e0ffe0";
        thirdLineDiv.appendChild(lowPriorityImg);
        thirdLineDiv.appendChild(lowPriorityText);
      }

      toDoCard.appendChild(thirdLineDiv);

      // Event listener for a taskDeleteButton
      taskDeleteButton.addEventListener("click", () => {
        // Remove the task from the DOM
        dateHeader.removeChild(toDoCard);

        // Remove the task from local storage
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const updatedTasks = tasks.filter((t) => t.id !== task.id);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));

        // Refresh the task list on screen
        showTaskOnScreen();
      });

      taskEditButton.addEventListener("click", () => {
        const { editTaskDialogHTML } = createEditTaskDialogDOM(
          contentBox,
          task.id
        );
        editTaskDialogHTML.showModal();
      });

      // Add event listener to the checkbox
      taskCheckBox.addEventListener("change", function () {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const taskToUpdate = tasks.find((t) => t.id === task.id);
        taskToUpdate.completed = this.checked;

        localStorage.setItem("tasks", JSON.stringify(tasks));

        taskNameDOM.style.textDecoration = taskToUpdate.completed
          ? "line-through"
          : "none";
        taskDescriptionDOM.style.textDecoration = taskToUpdate.completed
          ? "line-through"
          : "none";
      });
    });

    taskHolder.appendChild(dateHeader);
  });
}

function addTodayDateOnScreen(dueDate) {
  const dateHeader = document.createElement("div");
  dateHeader.classList.add("singleDateHolder");

  // Date adding
  const singleDateDOM = document.createElement("p");
  singleDateDOM.classList.add("singleDateDOM");
  const todayDate = getTodayDate();
  const tomorrowDate = getTomorrowDate();

  if (dueDate === todayDate) {
    singleDateDOM.textContent = "Today, " + dueDate;
  } else if (dueDate === tomorrowDate) {
    singleDateDOM.textContent = "Tomorrow, " + dueDate;
  } else {
    singleDateDOM.textContent = dueDate;
  }
  dateHeader.appendChild(singleDateDOM);

  return { dateHeader };
}
