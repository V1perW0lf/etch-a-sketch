const gridContainer = document.querySelector("div.grid-container");
let gridArray = []

for (let i = 0; i < 16; i++) {
    gridArray[i] = [];
    for (let j = 0; j < 16; j++) {
        console.log(i);
        console.log(j);
        gridArray[i][j] = document.createElement('div');
        gridArray[i][j].className = 'grid-square';
        gridContainer.appendChild(gridArray[i][j]);
    }
    // gridArray[i] = document.createElement('div');


}