// This script is optional, it just adds a fun animation to the heading
const heading = document.querySelector("h1");
const letters = heading.textContent.split("");

heading.textContent = "";

letters.forEach((letter) => {
  const span = document.createElement("span");
  span.textContent = letter;
  span.style.opacity = "0";
  heading.appendChild(span);

  setTimeout(() => {
    span.style.opacity = "1";
  }, Math.floor(Math.random() * 2000) + 1);
});
