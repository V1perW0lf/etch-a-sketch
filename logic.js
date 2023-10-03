let darkenPercent = .1;

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
            gridArray[i][j].addEventListener("mouseover", () => changeGridColor(gridArray[i][j]))
            gridContainer.appendChild(gridArray[i][j]);
        }
        const lineBreak = document.createElement('div');
        lineBreak.className = "break";
        gridContainer.appendChild(lineBreak);
    }
}

function changeGridColor(grid) {
    let randomRGBString = randomRGB();
    let rgbArray = randomRGBString.slice(4,randomRGBString.length-1).split(",")
    let newArray = rgbArray.map((rgbValue) => {
        return rgbValue -= rgbValue * darkenPercent;
    })
    darkenPercent += .1;
    grid.style.backgroundColor = `rgb(${newArray[0]},${newArray[1]},${newArray[2]})`
}

function randomRGB() {
    return `rgb(${getRandomIntInclusive(0, 255)},${getRandomIntInclusive(0, 255)},${getRandomIntInclusive(0, 255)})`
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
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

    darkenPercent = .1;
    createGrid(newGridSize);
})

createGrid();