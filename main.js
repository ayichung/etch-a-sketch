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
            gridCell.addEventListener("mouseover", () => changeColor(gridCell));
            gridRow.appendChild(gridCell);
        }
        gridCont.appendChild(gridRow);
    }
}

createGrid(gridSize.getAttribute("value"));

/* color */
function changeColor (gridCell) {
    gridCell.classList.add("fill");
}

/* reset */
const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", resetGrid);

function resetGrid() {
    const gridCells = document.querySelectorAll(".grid-cell");
    gridCells.forEach(gridCell => gridCell.classList.remove("fill"));
}

/* resize */
gridSize.addEventListener("keydown", resizeGrid);

function resizeGrid(e) {
    dim = gridSize.value;
    if (e.key === "Enter") {
        e.preventDefault();
        if (dim <= 50) {
            document.querySelector("#grid-size-error").setAttribute("hidden", "");
            while (gridCont.firstChild) {
                gridCont.removeChild(gridCont.firstChild);
            }
            createGrid(dim);
        }
        else {
            document.querySelector("#grid-size-error").removeAttribute("hidden");
        }
    }
}