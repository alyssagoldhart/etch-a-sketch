const grid = document.querySelector(".grid");
const button = document.querySelector("button");

function createGrid(row, column) {
  for (let i = 0; i < row * column ; i++) {
    const flexPercentage = 100/(row + 1);
    const flexBasis = flexPercentage.toString();
    const flexValue = `1 1 ${flexBasis}%`;
    const square = document.createElement("div");
    square.classList.add("squareDiv");
    grid.appendChild(square);
    square.style.border = "1px solid black";
    square.style.flex = flexValue;
    square.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "black";
    });
  }
};

createGrid(16, 16);

button.addEventListener("click", (event) => prompt('Enter a number between 4 and 100'));