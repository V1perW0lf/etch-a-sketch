function createGrid(size = 16) {
    const gridContainer = document.querySelector("div.grid-container");
    const gridContainerWidth = gridContainer.offsetWidth;
    const BORDER_SIZE = '1';
    const squareSize = ((gridContainerWidth/size) - (+BORDER_SIZE * 2)).toString() + 'px';
    let gridArray = [];
    
    for (let i = 0; i < size; i++) {
        gridArray[i] = [];
        for (let j = 0; j < size; j++) {
            gridArray[i][j] = document.createElement('div');
            gridArray[i][j].className = 'grid-square';
            gridArray[i][j].style.border = `${BORDER_SIZE}px solid black`;
            gridArray[i][j].style.width = squareSize;
            gridArray[i][j].style.height = squareSize;
            gridArray[i][j].addEventListener("mouseover", () => {
                gridArray[i][j].style.backgroundColor = 'blue';
            })
            gridContainer.appendChild(gridArray[i][j]);
        }
        const lineBreak = document.createElement('div');
        lineBreak.className = "break";
        gridContainer.appendChild(lineBreak);
    }
}

const gridSizeButton = document.querySelector('button.square-prompt');
gridSizeButton.addEventListener('click', () => {
    let newGridSize = +prompt("Please enter a new grid size. Grids cannot be larger than 100.");
    if(newGridSize > 100) {
        newGridSize = 100;
    }
    
    const oldGrids = document.querySelectorAll('div.grid-square');
    oldGrids.forEach((square) => {
        square.remove();
    })

    createGrid(newGridSize);
})

createGrid();