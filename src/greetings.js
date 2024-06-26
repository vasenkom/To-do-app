import { contentBox } from "./index.js";

export function greetFunction() {
  const greeting = document.createElement("div");
  greeting.classList.add("greeting");

  const greetingText = document.createElement("h2");

  const currentHour = new Date().getHours();

  if (currentHour < 12) {
    greetingText.textContent = "Good Morning!";
  } else if (currentHour < 17) {
    greetingText.textContent = "Good Afternoon!";
  } else {
    greetingText.textContent = "Good Evening!";
  }

  greeting.appendChild(greetingText);
  contentBox.appendChild(greeting);
}
