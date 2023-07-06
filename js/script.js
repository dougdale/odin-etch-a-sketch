let squaresPerSide = 4;
const containerWidth = 800;
const container = document.querySelector('#container');

container.style.width = `${containerWidth}px`;
container.style.height = `${containerWidth}px`;

function buildGrid() {
  const widthString = `${containerWidth/squaresPerSide}px`;

  for(let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const gridBox = document.createElement('div');
    gridBox.classList.add("gridbox");
    gridBox.style.width = widthString;
    gridBox.style.height = widthString;
    gridBox.style.flex = `1 0 ${widthString}`;

    container.appendChild(gridBox);
  }
}

buildGrid();
