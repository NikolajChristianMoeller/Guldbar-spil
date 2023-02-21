"use strict";

window.addEventListener("load", start);

let points = 0;
let lives = 3;

function start() {
  console.log("JavaScript kører!");

  // Start animationer
  //document.querySelector("#coin1_container").classList.add("falling");
  //document.querySelector("#bomb_container").classList.add("falling");
  //document.querySelector("#heart_container").classList.add("falling");

  // Registrer click
  //document.querySelector("#coin1_container").addEventListener("click", clickCoin);
  //document.querySelector("#bomb_container").addEventListener("click", clickBomb);
  //document.querySelector("#heart_container").addEventListener("click", clickHeart);
    
    document.querySelector("#game_elements").addEventListener("click", clickBeer);
}






function clickBeer() {
  console.log("Click beer");
  // Forhindr gentagne clicks
  document.querySelector("#heart1_container").removeEventListener("click", clickHeart);

  // Stop coin container
  document.querySelector("#heart_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#heart_sprite").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document.querySelector("#heart_container").addEventListener("animationend", heartGone);
  incrementLives();
}

function heartGone() {
  document.querySelector("#heart_container").removeEventListener("animationend", heartGone);

  // fjern forsvind-animation
  document.querySelector("#heart_sprite").classList.remove("zoom_out");

  // fjern pause
  document.querySelector("#heart_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#heart_container").classList.remove("falling");
  document.querySelector("#heart_container").offsetWidth;
  document.querySelector("#heart_container").classList.add("falling");

  // gør det muligt at klikke på coin igen
  document.querySelector("#heart_container").addEventListener("click", clickHeart);
}

function incrementHearts() {
  lives++;
  console.log(points);
  displayHearts();
}

function decrementHearts() {
  lives--;
  console.log(points);
  displayHears();
}

function displayHearts() {
  console.log("displayHearts");
  document.querySelector("#heart_count").textContent = hearts;
}







//POINTS//POINTS//POINTS//POINTS//POINTS//POINTS//POINTS//POINTS//POINTS//POINTS//POINTS//POINTS//POINTS//POINTS//POINTS//POINTS//POINTS





function incrementPoints() {
  points++;
  console.log(points);
  displayPoints();
}

function decrementPoints() {
  points--;
  console.log(points);
  displayPoints();
}

function displayPoints() {
  console.log("displayPoints");
  document.querySelector("#coin_count").textContent = points;
}





//COIN//COIN//COIN//COIN//COIN//COIN//COIN//COIN//COIN//COIN//COIN//COIN//COIN//COIN//COIN//COIN//COIN//COIN//COIN//COIN//COIN//COIN//COIN





function coinGone() {
  // fjern event der bringer os herind
  document.querySelector("#coin1_container").removeEventListener("animationend", coinGone);

  // fjern forsvind-animation
  document.querySelector("#coin1_sprite").classList.remove("zoom_out");

  // fjern pause
  document.querySelector("#coin1_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#coin1_container").classList.remove("falling");
  document.querySelector("#coin1_container").offsetWidth;
  document.querySelector("#coin1_container").classList.add("falling");

  // gør det muligt at klikke på coin igen
  document.querySelector("#coin1_container").addEventListener("click", clickCoin);
}

function clickCoin() {
  console.log("Click coin");
  // Forhindr gentagne clicks
  document.querySelector("#coin1_container").removeEventListener("click", clickCoin);

  // Stop coin container
  document.querySelector("#coin1_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#coin1_sprite").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document.querySelector("#coin1_container").addEventListener("animationend", coinGone);
  incrementPoints();
}





//LIVES//LIVES//LIVES//LIVES//LIVES//LIVES//LIVES//LIVES//LIVES//LIVES//LIVES//LIVES//LIVES//LIVES//LIVES//LIVES//LIVES//LIVES//LIVES//LIVES





function incrementLives() {
  lives++;
  console.log(lives);
  displayIncrementedLives();
}

function displayIncrementedLives() {
  console.log(`#heart${lives}`);
  document.querySelector(`#heart${lives}`).classList.remove("broken_heart");
  document.querySelector(`#heart${lives}`).classList.add("active_heart");
}

function decrementLives() {
  console.log("decrementLives");
  lives--;
  console.log(lives);
  displayDecrementedLives();
}

function displayDecrementedLives() {
  console.log(`#heart${lives}`);
  document.querySelector(`#heart${lives + 1}`).classList.remove("active_heart");
  document.querySelector(`#heart${lives + 1}`).classList.add("broken_heart");
}





//BOMB////BOMB////BOMB////BOMB////BOMB////BOMB////BOMB////BOMB////BOMB////BOMB////BOMB////BOMB////BOMB////BOMB////BOMB////BOMB//






function bombGone() {
  // fjern event der bringer os herind
  document.querySelector("#bomb_container").removeEventListener("animationend", bombGone);

  // fjern forsvind-animation
  document.querySelector("#bomb_sprite").classList.remove("zoom_in");

  // fjern pause
  document.querySelector("#bomb_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#bomb_container").classList.remove("falling");
  document.querySelector("#bomb_container").offsetWidth;
  document.querySelector("#bomb_container").classList.add("falling");

  // gør det muligt at klikke på coin igen
  document.querySelector("#bomb_container").addEventListener("click", clickBomb);
}



function clickBomb() {
  console.log("Click bomb");
  // Forhindr gentagne clicks
  document.querySelector("#bomb_container").removeEventListener("click", clickBomb);

  // Stop coin container
  document.querySelector("#bomb_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#bomb_sprite").classList.add("zoom_in");

  // når forsvind-animation er færdig: coinGone
  document.querySelector("#bomb_container").addEventListener("animationend", bombGone);
  decrementLives();
}
