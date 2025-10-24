const grid = document.querySelector(".grid");
const button = document.querySelector("button");

function createGrid(row) {
  for (let i = 0; i < row ** 2 ; i++) {
    const flexPercentage = 100/(row + 1);
    const flexBasis = flexPercentage.toString();
    const flexValue = `1 0 ${flexBasis}%`;
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("gridSquare");
    grid.appendChild(gridSquare);
    gridSquare.style.border = "1px solid black";
    gridSquare.style.flex = flexValue;
    gridSquare.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "orange";
    })
   console.log(row); 
   console.log(flexPercentage);
    
  };
  
};

createGrid(16);

function clearGrid() {
  while (grid.firstChild) {
  grid.removeChild(grid.firstChild);
  };
};

function changeGrid() {
  clearGrid();
  const gridSize = prompt('Enter a number between 4 and 100');
  const newGridSize = Number(gridSize);
  createGrid(newGridSize);
};
