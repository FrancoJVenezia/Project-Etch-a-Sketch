const gridContainer = document.getElementById("gridContainer");
const reseteo = document.getElementById("reseteo");
let gridSize = prompt("Elige el tamaño de tu grid");

createGrid(gridSize);

function createDiv (size){
    const div = document.createElement("div");
    div.classList.add("divGrid");
    div.classList.add("hoverxd");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    return div;
}
function createGrid (gridSize){
    for (let i = 0; i<gridSize; i++){
        for(let j = 0; j<gridSize; j++){
            gridContainer.appendChild(createDiv((gridContainer.clientWidth / gridSize)-0.1));
        }
        
    }
}
gridContainer.addEventListener('mouseover', function (e) {
    if (e.target.matches('.divGrid')) {
      e.target.classList.add('active');
    }
  });

  function reset() {
    while (gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.lastChild);
    }
    gridSize = prompt("Elige el tamaño de tu grid");
    createGrid(gridSize);
  }
  reseteo.addEventListener('click', function () {
    reset();
  });
  