let grid = document.querySelector(".grid"); // para que funcione grid tiene que estar en colum

for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < 16; j++) {
        let cell = document.createElement("div");
        cell.classList.add("cell"); // 👈 le pongo clase
        row.appendChild(cell);
    }

    grid.appendChild(row);
}
