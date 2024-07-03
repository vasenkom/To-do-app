import { todos, createTask } from "./newToDo";
import { getTodayDate } from "./greetings";
import { showTaskOnScreen } from "./taskDOM.js";
import { groupTasksByDate } from "./taskDOM.js";

export function addDefaultTask() {
  const todayDate = getTodayDate();
  if (todos.length < 1) {
    const defaultTask = createTask(
      "Add your first task",
      "Do it by clicking on Add Task in menu section",
      todayDate,
      "High",
      false
    );
    showTaskOnScreen(groupTasksByDate());
  }
}
