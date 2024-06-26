export const todos = [];
export function createTask(name, description, dueDate, priority, colour) {
  const newToDo = {
    name,
    description,
    dueDate,
    priority,
    colour,
    completed: false,
  };
  todos.push();
  return newToDo;
}
