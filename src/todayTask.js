import { getTodayDate } from "./greetings.js";

export function showTodayTask() {
  const todayDate = getTodayDate();
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  console.log("Today tasks are shown?"); //debugging

  const todayGroupedTasks = tasks.reduce((acc, task) => {
    if (task.dueDate === todayDate) {
      if (!acc[task.dueDate]) {
        acc[task.dueDate] = [];
      }
      acc[task.dueDate].push(task);
    }
    return acc;
  }, {});
  return todayGroupedTasks;
}
