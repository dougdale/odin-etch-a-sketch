let squaresPerSide = 4;
const containerWidth = 800;
const container = document.querySelector('#container');
const sizeButton = document.querySelector('#size');

container.style.width = `${containerWidth}px`;
container.style.height = `${containerWidth}px`;

function handleEvent() {
    this.style.backgroundColor = 'black';
}

function buildGrid() {
  const widthString = `${containerWidth/squaresPerSide}px`;

  for(let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const gridBox = document.createElement('div');
    gridBox.classList.add("gridbox");
    gridBox.style.width = widthString;
    gridBox.style.height = widthString;
    gridBox.style.flex = `1 0 ${widthString}`;
    gridBox.addEventListener('mouseenter', handleEvent);

    container.appendChild(gridBox);
  }
}

function changeSize() {
  squaresPerSide = prompt('Enter new number of squares per side: ');

  if (squaresPerSide > 100) squaresPerSide = 100;

  const gridBoxList = document.querySelectorAll('.gridbox');
  gridBoxList.forEach((el) => container.removeChild(el));

  buildGrid();
}

sizeButton.addEventListener('click', changeSize);

buildGrid();
