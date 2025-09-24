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
        createGrid(number);
        grid.style.display = "flex";
    }
} );

function createGrid(num) {
    //primero se debe verificar que el  numero sea valido, luego lo hago 
    

    for (let i = 0; i < num; i++) {
    let row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < num; j++) {
        let cell = document.createElement("div");
        cell.classList.add("cell"); // 👈 le pongo clase
        row.appendChild(cell);
    }

    grid.appendChild(row);
}

}