
const DEFAULT_COLOR = "black";
const GRID_COLOR = "white";

var container = document.getElementById("container-cells");
var color = DEFAULT_COLOR;
var gridColor = GRID_COLOR;
let SIZE = 16;

function createGrid(SIZE){
    container.style.gridTemplateColumns = `repeat(${SIZE}, 1fr)`
    container.style.gridTemplateRows = `repeat(${SIZE}, 1fr)`
    for (var i = 0; i < SIZE*SIZE; i++) {
        const cell = document.createElement('div');
        cell.classList.add('square-cell');
        cell.style.backgroundColor = gridColor;
        cell.addEventListener("mouseenter", paint);
        container.appendChild(cell);
    }
}

function paint(e){
    e.target.style.backgroundColor = color;
}

function removeGrid(){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
}
var sizeValue = document.getElementById('sizeValue');

function updateGrid(SIZE){
    removeGrid();
    createGrid(SIZE);
    sizeValue.innerHTML = `${SIZE} x ${SIZE}`
    container.setAttribute("style","grid-template-columns: repeat("+SIZE+",1fr);");
}

var btnColor = document.getElementById("btn-color");
btnColor.addEventListener('click',function (){
    color = DEFAULT_COLOR;
});

var btnErase = document.getElementById("btn-erase");
btnErase.addEventListener('click',function (){
    color = gridColor;
});

//TODO: Make it Rainbow effect.
var btnRandom = document.getElementById("btn-random");
btnRandom.addEventListener('click',function (){
    color = "#"+Math.floor(Math.random()*16777215).toString(16);
});

var btnClear = document.getElementById("btn-clear");
btnClear.addEventListener('click',function (){
    divs = container.children;
    for (let i = 0; i < SIZE*SIZE; i++) {
        divs[i].style.backgroundColor = gridColor;
    }
});

var slider = document.getElementById("myRange");
slider.oninput = function() {
    SIZE = this.value;
    console.log(SIZE);
    updateGrid(SIZE);
}


window.onload = () => {
    createGrid(SIZE);
}
// TODO: Make a variable for the size




