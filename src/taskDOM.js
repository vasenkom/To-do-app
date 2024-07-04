import { todos, createTask } from "./newToDo";
import { contentBox } from "./domElements.js";
import trashcan from "./img/delete2.png";
import edit from "./img/edit.png";
import highPriority from "./img/highPriority.png";
import mediumPriority from "./img/mediumPriority.png";
import lowPriority from "./img/lowPriority.png";
import { getTodayDate, getTomorrowDate } from "./greetings.js";
import { addCheckboxListeners } from "./eventListeners.js";

export function groupTasksByDate() {
  const groupedTasksAll = {};
  todos.forEach((task) => {
    if (!groupedTasksAll[task.dueDate]) {
      groupedTasksAll[task.dueDate] = [];
    }
    groupedTasksAll[task.dueDate].push(task);
  });
  return groupedTasksAll;
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
        console.log("High");
        thirdLineDiv.style.backgroundColor = "#fddfdf";
        thirdLineDiv.appendChild(highPriorityImg);
        thirdLineDiv.appendChild(highPriorityText);
        console.log("High priority task added:", task.name);
      } else if (task.priority == "medium" || task.priority == "Medium") {
        console.log("Medium");
        thirdLineDiv.style.backgroundColor = "#ffffc9";
        thirdLineDiv.appendChild(mediumPriorityImg);
        thirdLineDiv.appendChild(mediumPriorityText);
        console.log("Medium priority task added:", task.name);
      } else if (task.priority == "low") {
        console.log(task.priority == "low" || task.priority == "Low");
        thirdLineDiv.style.backgroundColor = "#e0ffe0";
        thirdLineDiv.appendChild(lowPriorityImg);
        thirdLineDiv.appendChild(lowPriorityText);
        console.log("Low priority task added:", task.name);
      }

      // Check if elements are appended correctly
      console.log("Priority div content:", thirdLineDiv.innerHTML);

      toDoCard.appendChild(thirdLineDiv);

      taskDeleteButton.addEventListener("click", function () {
        // Remove the task from the DOM
        dateHeader.removeChild(toDoCard);

        // Find the index of the task in the todos []
        const taskIndex = todos.findIndex((t) => t === task);

        if (taskIndex > -1) {
          // Remove the task from the todos []
          todos.splice(taskIndex, 1);

          console.log("Updated todos:", todos); // debugging
        }
      });

      // Add event listener to the checkbox
      taskCheckBox.addEventListener("change", function () {
        const taskId = this.dataset.taskId;
        const taskToUpdate = todos.find((t) => t.id === taskId);
        taskToUpdate.completed = this.checked;

        taskNameDOM.style.textDecoration = taskToUpdate.completed
          ? "line-through"
          : "none";
        taskDescriptionDOM.style.textDecoration = taskToUpdate.completed
          ? "line-through"
          : "none";
      });
    });

    taskHolder.appendChild(dateHeader);
    console.log(todos.length);
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

  console.log(todayDate); // debugging
  console.log(dueDate); // debugging

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
