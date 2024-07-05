// export const todos = [];

// export function createTask(
//   name,
//   description,
//   dueDate,
//   priority,
//   completed = false
// ) {
//   const task = {
//     id: Date.now().toString(), // identifier for each task
//     name,
//     description,
//     dueDate,
//     priority,
//     completed,
//   };
//   todos.push(task);
//   return task;
// }

export function populateStorage(
  name,
  description,
  dueDate,
  priority,
  completed = false
) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const newTask = {
    id: Date.now().toString(),
    name,
    description,
    dueDate,
    priority,
    completed,
  };
  tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
