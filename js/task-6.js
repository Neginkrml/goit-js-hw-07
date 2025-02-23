function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");

createBtn.addEventListener("click", () => {
  const amount = Number(inputEl.value);
  if (amount < 1 || amount > 100) return; 
  
  createBoxes(amount);
  inputEl.value = ""; 
});

destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  destroyBoxes(); 

  let size = 30;
  const elements = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";
    elements.push(box);
    size += 10; 
  }

  boxesContainer.append(...elements);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
