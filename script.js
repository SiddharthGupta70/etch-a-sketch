let penColor = '#000000';
let gridSize = 32;

updateRange();
makeGrid();
drawGrid();

const pickColor = document.querySelector('.color-picker input');
pickColor.addEventListener('input', function (e) {
    penColor = e.target.value;
});

const gridSlider = document.querySelector('.grid-range input');
gridSlider.addEventListener('input', function (e) {
    gridSize = e.target.value;
    updateRange();
});

const gridChange = document.querySelector('.grid-range button');
gridChange.addEventListener('click', function (e) {
    resetColor();
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
    grid.setAttribute('style', 'display:grid; grid-template: repeat('+gridSize+', 1fr) / repeat('+gridSize+', 1fr);');
    for (let i=0; i<gridSize*gridSize; i++) {
        const gridBlock = document.createElement('div');
        grid.appendChild(gridBlock);
    }
}

function drawGrid () {
    const gridHover = document.querySelectorAll('.grid-container div');
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