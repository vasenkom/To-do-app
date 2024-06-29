import { todos } from "./newToDo";
import { getTodayDate } from "./greetings";
import { createTask } from "./newToDo.js";
import { showTaskOnScreen } from "./taskDOM.js";

export function addDefaultTask() {
  const todayDate = getTodayDate();
  if (todos.length == 0) {
    const defaultTask = createTask(
      "Add your first task",
      "Do it by clicking on Add Task in menu section",
      todayDate,
      //   taskPriorityInput.value,
      "green"
    );

    showTaskOnScreen();
  }
}
