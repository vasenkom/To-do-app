export const todos = [];
export function createTask(name, description, dueDate, colour) {
  const newToDo = {
    name,
    description,
    dueDate,
    // priority,
    colour,
    completed: false,
  };
  todos.push(newToDo);
  return { newToDo, todos };
}
