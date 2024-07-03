import { contentBox } from "./domElements.js";

export function greetFunction() {
  const greeting = document.createElement("div");
  greeting.classList.add("greeting");

  const greetingText = document.createElement("h2");

  const currentHour = new Date().getHours();
  greetingText.textContent = getGreetingMessage(currentHour);

  greeting.appendChild(greetingText);
  contentBox.appendChild(greeting);
}

function getGreetingMessage(hour) {
  if (hour < 12) {
    return "Good Morning!";
  } else if (hour < 17) {
    return "Good Afternoon!";
  } else {
    return "Good Evening!";
  }
}

export function getTodayDate() {
  return formatDate(new Date());
}

export function getTomorrowDate() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return formatDate(tomorrow);
}

function formatDate(date) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
}
