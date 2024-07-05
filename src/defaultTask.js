import { populateStorage } from "./newToDo.js";
import { getTodayDate } from "./greetings.js";
import { showTaskOnScreen, groupTasksByDate } from "./taskDOM.js";

export function addDefaultTask() {
  const todayDate = getTodayDate();
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  if (tasks.length === 0) {
    const defaultTask = populateStorage(
      "Add your first task",
      "Do it by clicking on Add Task in menu section",
      todayDate,
      "High",
      false
    );

    showTaskOnScreen(groupTasksByDate());
  }
}
