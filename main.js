/* global vars */
const gridCont = document.querySelector(".grid-container");
dim = 16;

/* 16x16 grid */
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