function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

const startWidth = 30;
const startHeight = 30;
const delta = 10;

function destroyBoxes() {
  boxes.textContent = "";
}

function createBoxes(amount) {
  destroyBoxes();
  for (let i = 0; i < amount; i += 1) {
    const width = startWidth + delta * i;
    const height = startHeight + delta * i;
    const divBox = document.createElement("div");
    divBox.style.cssText = `width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()}`;
    boxes.insertAdjacentElement("beforeend", divBox);
  }
  input.value = "";
}

createBtn.addEventListener("click", () => {
  if (input.value >= 1 && input.value <= 100) {
    createBoxes(input.value);
  }
});

destroyBtn.addEventListener("click", destroyBoxes);




