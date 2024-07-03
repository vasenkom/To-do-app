import { todos } from "./newToDo";

export function markTaskCompletion(index) {
  // Toggle the completed property of the corresponding task
  // todos[index].completed = !todos[index].completed;

  const taskNameDOM = document.querySelectorAll(".taskNameDOM");
  const taskDescriptionDOM = document.querySelectorAll(".taskDescriptionDOM");

  taskNameDOM.forEach((name, i) => {
    if (i === index) {
      // "none" ? "block" : "none";
      name.style.textDecoration =
        name.style.textDecoration === "line-through" ? "none" : "line-through";
    }
  });

  taskDescriptionDOM.forEach((description, i) => {
    if (i === index) {
      description.style.textDecoration =
        description.style.textDecoration === "line-through"
          ? "none"
          : "line-through";
    }
  });
}
