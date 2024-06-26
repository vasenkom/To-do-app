import { contentBox } from "./index.js";

export function createAddTaskDialog(contentBox, addTodoButton) {
  // Dialog settings
  const closeDialog = document.createElement("button");
  closeDialog.classList.add("closeDialog");
  closeDialog.textContent = "x";

  closeDialog.addEventListener("click", function closeDialogFunction() {
    addTaskDialogHTML.close();
  });

  const addTaskDialogHTML = document.createElement("dialog");
  addTaskDialogHTML.classList.add("addTaskDialogHTML");

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
    taskPriorityInput.appendChild(option);
  });

  taskPriority.appendChild(taskPriorityLabel);
  taskPriority.appendChild(taskPriorityInput);

  // Colour
  const taskColour = document.createElement("div");
  taskColour.classList.add("singleFormQuestion");

  const taskColourLabel = document.createElement("label");
  taskColourLabel.htmlFor = "taskColour";
  taskColourLabel.textContent = "Task Colour";

  const taskColourInput = document.createElement("select");
  taskColourInput.name = "taskColour";
  taskColourInput.id = "taskColour";

  const colours = ["Blue", "Red", "Green", "Yellow"];
  colours.forEach((colour) => {
    const option = document.createElement("option");
    option.value = colour.toLowerCase();
    option.textContent = colour;
    taskColourInput.appendChild(option);
  });

  taskColour.appendChild(taskColourLabel);
  taskColour.appendChild(taskColourInput);

  // Submit button
  const submitAddTaskFormHTML = document.createElement("button");
  submitAddTaskFormHTML.classList.add("submitAddTaskFormHTML");
  submitAddTaskFormHTML.type = "submit";
  submitAddTaskFormHTML.textContent = "Submit";

  // Append form elements to the form
  addTaskFormHTML.appendChild(taskName);
  addTaskFormHTML.appendChild(taskDescription);
  addTaskFormHTML.appendChild(taskDueDate);
  addTaskFormHTML.appendChild(taskPriority);
  addTaskFormHTML.appendChild(taskColour);
  addTaskFormHTML.appendChild(submitAddTaskFormHTML);

  // Append the form to the dialog
  addTaskDialogHTML.appendChild(closeDialog);
  addTaskDialogHTML.appendChild(addTaskFormHTML);

  // Append the dialog to the content box
  contentBox.appendChild(addTaskDialogHTML);

  // Event listener for addTodoButton
  addTodoButton.addEventListener("click", () => {
    addTaskDialogHTML.showModal();
  });

  return addTaskDialogHTML;
}
