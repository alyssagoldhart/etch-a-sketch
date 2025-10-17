const grid = document.querySelector('.grid');

function createGrid(row, column) {
  for (let i = 0; i < row * column ; i++) {
    const square = document.createElement("div");
    square.classList.add('square-div');
    grid.appendChild(square);
  }
};

createGrid(16, 16);