let btn = document.querySelector(".change-color");

btn.addEventListener("click", () => {
  let span = document.querySelector(".color");
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  document.body.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
});