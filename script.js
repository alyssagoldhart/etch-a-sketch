const grid = document.querySelector(".grid");
const buttonSize = document.querySelector("#size");
const buttonColor = document.querySelector("#color");
let num;

function createGrid(size) {
  for (let i = 0; i < size; i++) {
    num = (i + 1).toString();
    const row = document.createElement("div");
    grid.appendChild(row);  
    row.setAttribute("id", `row${num}`);
    row.style.display = "flex";
    row.style.flex = 1;
    row.style.borderBottom = "0px";
    for (let j = 0; j < size; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      row.appendChild(square);
      square.style.flex = 1;
      square.style.border = "0.25px solid white";
      square.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "black";
      });
    };
  };
num = 0;    
};

createGrid(16);

function clearGrid() {
  while (grid.firstChild) {
  grid.removeChild(grid.firstChild);
  };
};

function changeGrid() {
  const gridSize = prompt('Enter a number between 2 and 100');
  if (gridSize != null && (gridSize > 1 && gridSize < 101)) {
    const newGridSize = Number(gridSize);
    clearGrid();
    createGrid(newGridSize);
  } else {
    alert("Error! Please enter a valid number between 2 and 100")
  }
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomColor() {
  const rValue = getRandomInt(0, 255).toString();
  const gValue = getRandomInt(0, 255).toString();
  const bValue = getRandomInt(0, 255).toString();
  const rgbValue = `rgb(${rValue}, ${gValue}, ${bValue})`;
  return rgbValue;
}

buttonSize.addEventListener("click", (event) => changeGrid());

buttonColor.addEventListener("click", (event) => {
  const squares = document.querySelectorAll(".square");
  squares.forEach(element => {
    element.addEventListener("mouseover", (event) => {
      console.log("Hovered!!!")
      event.target.style.backgroundColor = generateRandomColor();
    });
  });
});