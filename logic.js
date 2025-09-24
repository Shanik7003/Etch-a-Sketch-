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

// let cuadritos  = document.querySelectorAll(".cell");
// cuadritos.forEach(cuadro => {
//   cuadro.addEventListener("mouseover", () => {
//     cuadro.style.backgroundColor = "black"; // ejemplo
//   });
// }); esta es la misma forma de hacer lo de abajo pero aqui creo 16x16 eventListeners y en la otra no, la de abajo es mejor, me la dio GPTo

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
    }
} );