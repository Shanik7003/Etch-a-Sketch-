let grid = document.querySelector(".grid"); // para que funcione grid tiene que estar en colum

grid.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("cell")) {
    e.target.style.backgroundColor = "black";
  }
});

//codigo para el popup
let popup = document.getElementById("popup");
let okButton = document.getElementById("ok");
let sizeButton = document.querySelector(".button");

sizeButton.addEventListener("click", () => OnButtonClicked())

function OnButtonClicked() {
    popup.style.display = "block";

}

okButton.addEventListener("click", () => {
    let number = Number(document.getElementById("inputNumero").value);
    if (number > 100 || number <= 0) {
        alert("El numero escrito no es correcto, dbee estar entre 1 y 100")
    }
    else{
        popup.style.display = "none";
        grid.style.display = "flex";
        createGrid(number);
    }
} );

function createGrid(num) {
    
    let gridSize = grid.clientWidth; // ancho en píxeles del grid
    const cellSize = Math.floor(gridSize / num); // tamaño exacto en px

    for (let i = 0; i < num; i++) {
        let row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < num; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.width = cellSize + "px";
            cell.style.height = cellSize + "px";
            row.appendChild(cell);
        }

        grid.appendChild(row);
    }

}