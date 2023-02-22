"use strict";

window.addEventListener("load", start);

let points = 0;
let lives = 3;

function start() {
  console.log("JavaScript kører!");

  //Start animationer
  document.querySelector("#APC1_container").classList.add("falling");
  document.querySelector("#beer1_container").classList.add("falling");
  document.querySelector("#beer2_container").classList.add("falling");
  document.querySelector("#beer3_container").classList.add("falling");
  document.querySelector("#fanta1_container").classList.add("falling");
  document.querySelector("#fanta2_container").classList.add("falling");
  document.querySelector("#fanta3_container").classList.add("falling");
  document.querySelector("#laptop_container").classList.add("falling");

  //Registrer click
  document.querySelector("#APC1_container").addEventListener("click", clickCola);
  document.querySelector("#beer1_container").addEventListener("click", clickBeer);
  document.querySelector("#beer2_container").addEventListener("click", clickBeer);
  document.querySelector("#beer3_container").addEventListener("click", clickBeer);
    
  document.querySelector("#game_elements").addEventListener("click", clickBeer);
}


let score = 0;

score += 10;

let scoreElement = document.getElementById("scoreboard_container").innerHTML = "score: " + score;
scoreboardElement.textContent = "Score: " + score;




