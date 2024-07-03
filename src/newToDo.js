export const todos = [];

export function createTask(
  name,
  description,
  dueDate,
  priority,
  completed = false
) {
  const task = {
    id: Date.now().toString(), // identifier for each task
    name,
    description,
    dueDate,
    priority,
    completed,
  };
  todos.push(task);
  return task;
}
