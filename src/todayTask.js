import { todos } from "./newToDo";
import { contentBox } from "./index.js";
import trashcan from "./img/delete2.png";
import edit from "./img/edit.png";
import { getTodayDate } from "./greetings.js";
import { getTomorrowDate } from "./greetings.js";

export function showTodayTask() {
  const todayDate = getTodayDate();
  const todayGroupedTasks = {};

  todos.forEach((task) => {
    if (task.dueDate === todayDate) {
      if (!todayGroupedTasks[task.dueDate]) {
        todayGroupedTasks[task.dueDate] = [];
      }
      todayGroupedTasks[task.dueDate].push(task);
    }
  });

  return todayGroupedTasks;
}

// export function showTodayTaskOnScreen() {
//   let taskHolder = document.querySelector(".taskHolder");

//   if (!taskHolder) {
//     taskHolder = document.createElement("div");
//     taskHolder.classList.add("taskHolder");
//     contentBox.appendChild(taskHolder);
//   }

//   // Clear taskHolder content before using again
//   taskHolder.innerHTML = "";

//   const groupedTasks = showTodayTask();

//   Object.keys(groupedTasks).forEach((dueDate) => {
//     const dateHeader = document.createElement("div");
//     dateHeader.classList.add("singleDateHolder");

//     // Date adding
//     const singleDateDOM = document.createElement("p");
//     singleDateDOM.classList.add("singleDateDOM");
//     const todayDate = getTodayDate();
//     const tomorrowDate = getTomorrowDate();

//     console.log(todayDate); // debugging
//     console.log(dueDate); // debugging

//     if (dueDate === todayDate) {
//       singleDateDOM.textContent = "Today, " + dueDate;
//     } else if (dueDate === tomorrowDate) {
//       singleDateDOM.textContent = "Tomorrow, " + dueDate;
//     } else {
//       singleDateDOM.textContent = dueDate;
//     }
//     dateHeader.appendChild(singleDateDOM);

//     groupedTasks[dueDate].forEach((task) => {
//       const toDoCard = document.createElement("div");
//       toDoCard.classList.add("toDoCard");

//       //Task colour
//       if (task.colour == "yellow") {
//         toDoCard.style.backgroundColor = "#fffaea";
//       }
//       if (task.colour == "red") {
//         toDoCard.style.backgroundColor = "#f4dede";
//       }
//       if (task.colour == "green") {
//         toDoCard.style.backgroundColor = "#daefd2";
//       }
//       if (task.colour == "blue") {
//         toDoCard.style.backgroundColor = "#deedf8";
//       }

//       // Add checkbox
//       const taskCheckBoxDiv = document.createElement("div");
//       taskCheckBoxDiv.classList.add("taskCheckBoxDiv");
//       const taskCheckBox = document.createElement("input");
//       taskCheckBox.type = "checkbox";
//       taskCheckBox.id = "readStatus";
//       taskCheckBoxDiv.appendChild(taskCheckBox);

//       // Add the name of the task
//       const taskNameDOM = document.createElement("p");
//       taskNameDOM.textContent = task.name;
//       taskNameDOM.classList.add("taskNameDOM");
//       taskCheckBoxDiv.appendChild(taskNameDOM);

//       // Add the edit button with value "edit"
//       const taskEditButton = document.createElement("button");
//       taskEditButton.classList.add("taskEditButton");
//       const editTaskButtonImg = document.createElement("img");
//       editTaskButtonImg.classList.add("editTaskButtonImg");
//       editTaskButtonImg.src = edit;
//       taskEditButton.appendChild(editTaskButtonImg);

//       // Add the delete button
//       const taskDeleteButton = document.createElement("button");
//       taskDeleteButton.classList.add("taskDeleteButton");
//       const deleteTaskButtonImg = document.createElement("img");
//       deleteTaskButtonImg.classList.add("deleteTaskButtonImg");
//       deleteTaskButtonImg.src = trashcan;
//       taskDeleteButton.appendChild(deleteTaskButtonImg);

//       // DIV for edit and delete button
//       const editDeleteDiv = document.createElement("div");
//       editDeleteDiv.classList.add("editDeleteDiv");
//       editDeleteDiv.appendChild(taskEditButton);
//       editDeleteDiv.appendChild(taskDeleteButton);

//       // First line div
//       const firstLineDiv = document.createElement("div");
//       firstLineDiv.classList.add("firstLineDiv");
//       firstLineDiv.appendChild(taskCheckBoxDiv);
//       firstLineDiv.appendChild(editDeleteDiv);
//       toDoCard.appendChild(firstLineDiv);

//       // Add the description of the task
//       const taskDescriptionDOM = document.createElement("p");
//       taskDescriptionDOM.textContent = task.description;
//       taskDescriptionDOM.classList.add("taskDescriptionDOM");
//       toDoCard.appendChild(taskDescriptionDOM);

//       dateHeader.appendChild(toDoCard);

//       taskDeleteButton.addEventListener("click", function () {
//         dateHeader.removeChild(toDoCard);
//       });
//     });

//     taskHolder.appendChild(dateHeader);
//     console.log(todos.length);
//   });
// }
