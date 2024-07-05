import close from "./img/close.png";
import { populateStorage } from "./newToDo";
import { groupTasksByDate } from "./taskDOM";
import { showTaskOnScreen } from "./taskDOM";

export function createEditTaskDialogDOM(contentBox, taskId) {
  // Find the task by ID
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const task = tasks.find((t) => t.id === taskId);

  // Dialog settings
  const editTaskDialogHTML = document.createElement("dialog");
  editTaskDialogHTML.classList.add("addTaskDialogHTML");

  const closeDialog = document.createElement("button");
  closeDialog.classList.add("closeDialog");
  const closeDialogImg = document.createElement("img");
  closeDialogImg.classList.add("closeDialogImg");
  closeDialogImg.src = close;

  const closeDialogDiv = document.createElement("div");
  closeDialogDiv.classList.add("closeDialogDiv");

  closeDialog.appendChild(closeDialogImg);

  closeDialog.addEventListener("click", () => {
    editTaskDialogHTML.close();
  });

  closeDialogDiv.appendChild(closeDialog);
  editTaskDialogHTML.appendChild(closeDialogDiv);
  contentBox.appendChild(editTaskDialogHTML);

  const { addTaskFormHTML, taskInputs } = createEditTaskForm(
    task,
    editTaskDialogHTML
  );

  // Append the form to the dialog
  editTaskDialogHTML.appendChild(addTaskFormHTML);

  return { editTaskDialogHTML, addTaskFormHTML, taskInputs };
}

function createEditTaskForm(task, dialog) {
  // Create a Form
  const addTaskFormHTML = document.createElement("form");
  addTaskFormHTML.classList.add("addTaskFormHTML");

  // Task Name
  const taskName = document.createElement("div");
  taskName.classList.add("singleFormQuestion");

  const taskNameLabel = document.createElement("label");
  taskNameLabel.htmlFor = "TaskName";
  taskNameLabel.textContent = "Task Name";

  const taskNameInput = document.createElement("input");
  taskNameInput.type = "text";
  taskNameInput.name = "TaskName";
  taskNameInput.id = "TaskName";
  taskNameInput.value = task.name || ""; // Ensure default value is an empty string

  taskName.appendChild(taskNameLabel);
  taskName.appendChild(taskNameInput);

  // Task Description
  const taskDescription = document.createElement("div");
  taskDescription.classList.add("singleFormQuestion");

  const taskDescriptionLabel = document.createElement("label");
  taskDescriptionLabel.htmlFor = "taskDescription";
  taskDescriptionLabel.textContent = "Task Description";

  const taskDescriptionInput = document.createElement("input");
  taskDescriptionInput.type = "text";
  taskDescriptionInput.name = "taskDescription";
  taskDescriptionInput.id = "taskDescription";
  taskDescriptionInput.value = task.description || ""; // Ensure default value is an empty string

  taskDescription.appendChild(taskDescriptionLabel);
  taskDescription.appendChild(taskDescriptionInput);

  // Task Due Date
  const taskDueDate = document.createElement("div");
  taskDueDate.classList.add("singleFormQuestion");

  const taskDueDateLabel = document.createElement("label");
  taskDueDateLabel.htmlFor = "taskDueDate";
  taskDueDateLabel.textContent = "Task Due Date";

  const taskDueDateInput = document.createElement("input");
  taskDueDateInput.type = "date";
  taskDueDateInput.value = task.dueDate || ""; // Ensure default value is an empty string
  taskDueDateInput.name = "taskDueDate";
  taskDueDateInput.id = "taskDueDate";

  taskDueDate.appendChild(taskDueDateLabel);
  taskDueDate.appendChild(taskDueDateInput);

  // Priority
  const taskPriority = document.createElement("div");
  taskPriority.classList.add("singleFormQuestion");

  const taskPriorityLabel = document.createElement("label");
  taskPriorityLabel.htmlFor = "taskPriority";
  taskPriorityLabel.textContent = "Task Priority";

  const taskPriorityInput = document.createElement("select");
  taskPriorityInput.name = "taskPriority";
  taskPriorityInput.id = "taskPriority";

  const priorities = ["High", "Medium", "Low"];
  priorities.forEach((priority) => {
    const option = document.createElement("option");
    option.value = priority.toLowerCase();
    option.textContent = priority;
    if (
      task.priority &&
      task.priority.toLowerCase() === priority.toLowerCase()
    ) {
      option.selected = true; // Ensure the current priority is selected
    }
    taskPriorityInput.appendChild(option);
  });

  taskPriority.appendChild(taskPriorityLabel);
  taskPriority.appendChild(taskPriorityInput);

  // Submit button
  const submitAddTaskFormHTML = document.createElement("button");
  submitAddTaskFormHTML.classList.add("submitAddTaskFormHTML");
  submitAddTaskFormHTML.type = "submit";
  submitAddTaskFormHTML.textContent = "Save";

  // Append form elements to the form
  addTaskFormHTML.appendChild(taskName);
  addTaskFormHTML.appendChild(taskDescription);
  addTaskFormHTML.appendChild(taskDueDate);
  addTaskFormHTML.appendChild(taskPriority);
  addTaskFormHTML.appendChild(submitAddTaskFormHTML);

  const taskInputs = {
    taskNameInput,
    taskDescriptionInput,
    taskDueDateInput,
    taskPriorityInput,
  };

  addTaskFormHTML.addEventListener("submit", (event) => {
    // Remove the task from the DOM
    // dateHeader.removeChild(toDoCard);
    event.preventDefault();

    // const { editTaskDialogHTML, addTaskFormHTML, taskInputs } =
    //   editTaskDialogHTML(contentBox);

    // Find the index of the task in the localStorage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = tasks.filter((t) => t.id !== task.id);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    const newTask = populateStorage(
      taskInputs.taskNameInput.value,
      taskInputs.taskDescriptionInput.value,
      taskInputs.taskDueDateInput.value,
      taskInputs.taskPriorityInput.value,
      false
    );
    console.log("New Task Added:", newTask);

    // //div that will include the tasks (mainly)
    // const taskHolder = document.createElement("div");
    // taskHolder.classList.add("taskHolder");

    //To show the task on the screen
    // groupTasksByDate();
    showTaskOnScreen(groupTasksByDate());

    dialog.close();
  });

  return { addTaskFormHTML, taskInputs };
}
