import star from "./img/star.png";
import add from "./img/plus4.png";
import add2 from "./img/plus5.png";
import allPapers from "./img/allTasks.png";

export function addImagesToButtons() {
  // Add add img to Add 1 button
  const imgholderAdd = document.querySelector(".imgholderAdd");
  const addImage = document.createElement("img");
  addImage.classList.add("addImage");
  addImage.src = add;
  imgholderAdd.appendChild(addImage);

  // Add add img to Add 2 button
  const imgholderAdd2 = document.querySelector(".imgholderAdd2");
  const addImage2 = document.createElement("img");
  addImage2.classList.add("addImage2");
  addImage2.src = add2;
  imgholderAdd2.appendChild(addImage2);

  // Add star img to Today button
  const imgholderStar = document.querySelector(".imgholderStar");
  const starImage = document.createElement("img");
  starImage.classList.add("starImage");
  starImage.src = star;
  imgholderStar.appendChild(starImage);

  // Add 'all' img to All button
  const imgholderAll = document.querySelector(".imgholderAll");
  const allTasksImage = document.createElement("img");
  allTasksImage.classList.add("allTasksImage");
  allTasksImage.src = allPapers;
  imgholderAll.appendChild(allTasksImage);
}
