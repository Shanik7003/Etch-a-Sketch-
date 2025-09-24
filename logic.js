let lista = [];
let grid = document.querySelector(".grid"); // gradi tiene que estar con flex-direction: colum para ue funcione 

for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    
    for (let i = 0; i < 16; i++) {  //aqui hay que definir las comulmnas ylas filas de la matriz
        lista[i] = document.createElement("div");
        row.appendChild(lista[i]);
    }
}

