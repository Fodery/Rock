const playerText = document.querySelector("#playert");
const compText = document.querySelector("#compt");
const resultText = document.querySelector("#resultt");
const choicebtn = document.querySelectorAll(".choicebtn");

let player;
let computer;
let result;

choicebtn.forEach(button => button.addEventListener("click", () => {

player = button.textContent;

} ));