function dispersar(event) {
    event.target.style.opacity = 0;
}

document.querySelector(".triangulo").addEventListener("click", dispersar);
document.querySelector(".cuadrado").addEventListener("click", dispersar);
document.querySelector(".circulo").addEventListener("click", dispersar);

function reset() {
    document.querySelector(".triangulo").style.opacity = 1;
    document.querySelector(".cuadrado").style.opacity = 1;
    document.querySelector(".circulo").style.opacity = 1;
}

document.querySelector(".reset").addEventListener("click", reset);