/* global vars */
const gridCont = document.querySelector(".grid-container");
const gridSize = document.querySelector("#grid-size");

/* grid */
function createGrid(dim) {
    gridCont.setAttribute("id", dim.toString());
    for (let i=0; i<dim; i++) {
        const gridRow = document.createElement("div");
        gridRow.setAttribute("class", "grid-row");
        for (let j=0; j<dim; j++) {
            const gridCell = document.createElement("div");
            gridCell.setAttribute("class", "grid-cell");
            gridRow.appendChild(gridCell);
        }
        gridCont.appendChild(gridRow);
    }
}

createGrid(gridSize.getAttribute("value"));

/* color */
const gridCells = document.querySelectorAll(".grid-cell");
gridCells.forEach(gridCell => gridCell.addEventListener("mouseover", () => changeColor(gridCell)));

function changeColor (gridCell) {
    gridCell.classList.add("fill");
}

/* reset */
const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", () => resetGrid(gridSize.getAttribute("value")));

function resetGrid(dim) {
    gridCells.forEach(gridCell => gridCell.classList.remove("fill"));
}