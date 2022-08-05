/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Generar Carta Random

const numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const palos = [
  `<i class="bi bi-suit-spade-fill"></i>`,
  `<i class="bi bi-suit-heart-fill"></i>`,
  `<i class="bi bi-suit-club-fill"></i>`,
  `<i class="bi bi-suit-diamond-fill"></i>`
];

let btnAddCard = document.getElementById("btn_add_card");
btnAddCard.addEventListener("click", generarCarta);

function generarCarta() {
  const random = el => el[Math.floor(Math.random() * el.length)];

  let getNumero = random(numeros);
  let getPalo = random(palos);

  const printNumero = document.getElementById("number");
  printNumero.innerHTML = getNumero;

  const printPalo = document.querySelectorAll(".palo");
  for (let i = 0; i < printPalo.length; i++) {
    printPalo[i].innerHTML = getPalo;

    if (
      getPalo === `<i class="bi bi-suit-heart-fill"></i>` ||
      getPalo === `<i class="bi bi-suit-diamond-fill"></i>`
    ) {
      (printPalo[i].style.color = "red") && (printNumero.style.color = "red");
    } else if (
      getPalo === `<i class="bi bi-suit-spade-fill"></i>` ||
      getPalo === `<i class="bi bi-suit-club-fill"></i>`
    ) {
      (printPalo[i].style.color = "black") &&
        (printNumero.style.color = "black");
    }
  }
}

window.onload = function() {
  generarCarta();
};

// Timer

window.setInterval(generarCarta, 10000);

// Chance weigth and heigth

// const btn_cambio = document.getElementById("btnSizeCard");

// btn_cambio.addEventListener("click", chanceSizeCard);

// function chanceSizeCard() {
//   let carta = document.getElementById("card");
//   let cambio_alto = document.getElementById("inputAltoCard").value;
//   let cambio_ancho = document.getElementById("inputAnchoCard").value;
//   carta.style.width = `${cambio_ancho}em`;
//   carta.style.height = `${cambio_alto}em`;
// }
