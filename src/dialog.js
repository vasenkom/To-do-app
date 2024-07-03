import { createTask } from "./newToDo.js";
import { showTaskOnScreen } from "./taskDOM.js";
import { groupTasksByDate } from "./taskDOM.js";
import close from "./img/close.png";

export function createAddTaskDialog(contentBox, addTodoButton) {
  const { addTaskDialogHTML, addTaskFormHTML, taskInputs } =
    createAddTaskDialogDOM(contentBox);

  // Event listener for addTodoButton
  addTodoButton.addEventListener("click", () => {
    addTaskDialogHTML.showModal();
  });

  // Add event listener for form submission
  addTaskFormHTML.addEventListener("submit", (event) => {
    event.preventDefault();
    const newTask = createTask(
      taskInputs.taskNameInput.value,
      taskInputs.taskDescriptionInput.value,
      taskInputs.taskDueDateInput.value,
      taskInputs.taskPriorityInput.value
      // taskInputs.taskColourInput.value
    );
    console.log("New Task Added:", newTask);

    //div that will include the tasks (mainly)
    const taskHolder = document.createElement("div");
    taskHolder.classList.add("taskHolder");

    //To show the task on the screen
    groupTasksByDate();
    showTaskOnScreen(groupTasksByDate());

    addTaskDialogHTML.close();
  });

  return addTaskDialogHTML;
}

function createAddTaskDialogDOM(contentBox) {
  // Dialog settings
  const addTaskDialogHTML = document.createElement("dialog");
  addTaskDialogHTML.classList.add("addTaskDialogHTML");

  const closeDialog = document.createElement("button");
  closeDialog.classList.add("closeDialog");
  const closeDialogImg = document.createElement("img");
  closeDialogImg.classList.add("closeDialogImg");
  closeDialogImg.src = close;

  const closeDialogDiv = document.createElement("div");
  closeDialogDiv.classList.add("closeDialogDiv");

  closeDialog.appendChild(closeDialogImg);

  closeDialog.addEventListener("click", () => {
    addTaskDialogHTML.close();
  });

  closeDialogDiv.appendChild(closeDialog);
  addTaskDialogHTML.appendChild(closeDialogDiv);
  contentBox.appendChild(addTaskDialogHTML);

  const { addTaskFormHTML, taskInputs } = createAddTaskForm();

  // Append the form to the dialog
  addTaskDialogHTML.appendChild(addTaskFormHTML);

  return { addTaskDialogHTML, addTaskFormHTML, taskInputs };
}

function createAddTaskForm() {
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
  taskDueDateInput.value = "2024-06-29";
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

  // // // Colour
  // const taskColour = document.createElement("div");
  // taskColour.classList.add("singleFormQuestion");

  // const taskColourLabel = document.createElement("label");
  // taskColourLabel.htmlFor = "taskColour";
  // taskColourLabel.textContent = "Task Colour";

  // const taskColourInput = document.createElement("select");
  // taskColourInput.name = "taskColour";
  // taskColourInput.id = "taskColour";

  // const colours = ["Blue", "Red", "Green", "Yellow"];
  // colours.forEach((colour) => {
  //   const option = document.createElement("option");
  //   option.value = colour.toLowerCase();
  //   option.textContent = colour;
  //   taskColourInput.appendChild(option);
  // });

  // taskColour.appendChild(taskColourLabel);
  // taskColour.appendChild(taskColourInput);

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
  // addTaskFormHTML.appendChild(taskColour);
  addTaskFormHTML.appendChild(submitAddTaskFormHTML);

  const taskInputs = {
    taskNameInput,
    taskDescriptionInput,
    taskDueDateInput,
    taskPriorityInput,
  };

  return { addTaskFormHTML, taskInputs };
}
