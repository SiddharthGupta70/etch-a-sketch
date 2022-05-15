let penColor = '#000000';
let gridSize = 32;

updateRange();
makeGrid();
drawGrid();

const pickColor = document.querySelector('.color-picker input');
pickColor.addEventListener('input', function (e) {
    penColor = e.target.value;
});

const gridChange = document.querySelector('.grid-range input');
gridChange.addEventListener('input', function (e) {
    gridSize = e.target.value;
    resetColor();
    updateRange();
    clearGrid();
    makeGrid();
    drawGrid();
});

const eraser = document.querySelector('.eraser button');
eraser.addEventListener('click', function(e) {
    penColor = 'white';
});

const gridClear = document.querySelector('.clear-grid button');
gridClear.addEventListener('click', () => {
    resetColor();
    clearGrid();
    makeGrid();
    drawGrid();
});

function updateRange() {
    const gridRange = document.querySelector('.grid-range p');
    gridRange.textContent = 'Grid size - '+gridSize+' X '+gridSize;
}

function makeGrid() {
    const grid = document.querySelector('.grid-container');
    for (let i=0; i<gridSize; i++) {
        const gridRow = document.createElement('div');
        gridRow.style.cssText = 'flex:1; display: flex;';    
        grid.appendChild(gridRow);
        for (let j=0; j<gridSize; j++) {
            const gridBlock = document.createElement('div');
            gridBlock.classList.add('grid-block');
            gridBlock.style.cssText = 'flex:1;';
            gridRow.appendChild(gridBlock);
        }
    }
}

function drawGrid () {
    const gridHover = document.querySelectorAll('.grid-block');
    gridHover.forEach (gridBlock => gridBlock.addEventListener ('mouseenter', function (e) {
        e.target.style.background = penColor;
    }));
}

function clearGrid() {
    const grid = document.querySelector('.grid-container');
    grid.textContent = '';
}

function resetColor() {
    penColor = 'black';
    const colorPicker = document.querySelector('.color-picker input');
    colorPicker.value = '#000000';
}