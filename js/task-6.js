let div = document.querySelector("#controls");
let input1 = div.querySelector("input");
let createBtn = div.querySelector("[data-create]");
let destroyBtn = div.querySelector("[data-destroy]");
let boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  let inputValue = parseInt(input1.value);

  if (
    input1.value.trim() === "" ||
    isNaN(inputValue) ||
    inputValue < 1 ||
    inputValue > 100
  ) {
    alert("Lütfen 1-100 arasında bir sayı girin");
  } else {
    createBoxes(inputValue);
    inputValue = "";
  }
});

const createBoxes = (inputValue) => {
  for (let i = 0; i < inputValue; i++) {
    let box = document.createElement("div");

    box.style.width = "30px";
    box.style.height = "30px";
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);
  }
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

destroyBtn.addEventListener("click", () => {
  boxes.innerHTML = "";
});