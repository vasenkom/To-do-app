import _ from "lodash";
import "./style.css";

const contentBox = document.querySelector("#content");
const addTodoButton = document.querySelector(".addButton");

addTodoButton.addEventListener("click", function () {
  dialogWindow.showModal();
});
