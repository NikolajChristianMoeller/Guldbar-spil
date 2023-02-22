"use strict";

window.addEventListener("load", start);

let points = 0;
let lives = 3;

function start() {
  console.log("JavaScript kører!");

  // Start animationer
  document.querySelector("#fanta1_container").classList.add("falling");
  // Registrer click
  document
    .querySelector("#cola1_container")
    .addEventListener("click", clickCola1);
  document
    .querySelector("#cola2_container")
    .addEventListener("click", clickCola2);
  document
    .querySelector("#cola3_container")
    .addEventListener("click", clickCola3);
  document
    .querySelector("#fanta1_container")
    .addEventListener("click", clickFanta1);
  document
    .querySelector("#fanta2_container")
    .addEventListener("click", clickFanta2);
  document
    .querySelector("#fanta3_container")
    .addEventListener("click", clickFanta3);
  document
    .querySelector("#beer1_container")
    .addEventListener("click", clickBeer1);
  document
    .querySelector("#beer2_container")
    .addEventListener("click", clickBeer2);
  document
    .querySelector("#beer3_container")
    .addEventListener("click", clickBeer3);
}

/**************************** CLICK FUNCTIONER ***************************************** */
/************************************ FANTA ******************************************** */

function clickFanta1() {
  console.log("Click Fanta1");
  // Forhindr gentagne clicks
  document.querySelector("#fanta1_container").removeEventListener("click", clickFanta1);

  // Stop coin container
  document.querySelector("#fanta1_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#fanta1_sprite").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document.querySelector("#fanta1_container").addEventListener("animationend", fanta1Gone);
  incrementPoints();
 
}

function clickFanta2() {
  console.log("Click Fanta2");
  // Forhindr gentagne clicks
  document.querySelector("#fanta2_container").removeEventListener("click", clickFanta2);

  // Stop coin container
  document.querySelector("#fanta2_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#fanta2_container").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document.querySelector("#fanta2_container").addEventListener("animationend", fanta2Gone);
  incrementPoints();
}

function clickFanta3() {
  console.log("Click Fanta3");
  // Forhindr gentagne clicks
  document.querySelector("#fanta3_container").removeEventListener("click", clickFanta3);

  // Stop coin container
  document.querySelector("#fanta3_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#fanta3_container").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document
    .querySelector("#fanta3_container")
    .addEventListener("animationend", fanta3Gone);
  incrementPoints();
}

/************************************ COLA ******************************** */

function clickCola1() {
  console.log("Click Cola1");
  // Forhindr gentagne clicks
  document
    .querySelector("#cola1_container")
    .removeEventListener("click", clickCola1);

  // Stop coin container
  document.querySelector("#cola1_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#cola1_sprite").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document
    .querySelector("#cola1_container")
    .addEventListener("animationend", heartCola1);
  incrementLives();
}

function clickCola2() {
  console.log("Click Cola2");
  // Forhindr gentagne clicks
  document
    .querySelector("#cola2_container")
    .removeEventListener("click", clickCola2);

  // Stop coin container
  document.querySelector("#cola2_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#cola2_sprite").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document
    .querySelector("#cola2_container")
    .addEventListener("animationend", cola2Gone);
  incrementLives();
}

function clickCola3() {
  console.log("Click Cola3");
  // Forhindr gentagne clicks
  document
    .querySelector("#cola3_container")
    .removeEventListener("click", clickCola3);

  // Stop coin container
  document.querySelector("#cola3_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#cola3_sprite").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document
    .querySelector("#cola3_container")
    .addEventListener("animationend", cola3Gone);
  incrementLives();
}

/********************************* BEER *********************************************** */

function clickBeer1() {
  console.log("Click Beer1");
  // Forhindr gentagne clicks
  document
    .querySelector("#beer1_container")
    .removeEventListener("click", clickBeer1);

  // Stop coin container
  document.querySelector("#beer1_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#beer1_sprite").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document
    .querySelector("#beer1_container")
    .addEventListener("animationend", beer1Gone);
  incrementLives();
}

function clickBeer2() {
  console.log("Click Beer2");
  // Forhindr gentagne clicks
  document
    .querySelector("#beer2_container")
    .removeEventListener("click", clickBeer2);

  // Stop coin container
  document.querySelector("#beer2_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#beer2_sprite").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document
    .querySelector("#beer2_container")
    .addEventListener("animationend", beer2Gone);
  incrementLives();
}

function clickBeer3() {
  console.log("Click Beer3");
  // Forhindr gentagne clicks
  document
    .querySelector("#beer3_container")
    .removeEventListener("click", clickBeer3);

  // Stop coin container
  document.querySelector("#beer3_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#beer3_sprite").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document
    .querySelector("#beer3_container")
    .addEventListener("animationend", beer3Gone);
  incrementLives();
}

/********************************************* GONE ***************************************** */

function fanta1Gone() {
  console.log("fanta1Gone");
  document.querySelector("#fanta1_container").removeEventListener("animationend", fanta1Gone);

  // fjern forsvind-animation
  document.querySelector("#fanta1_sprite").classList.remove("zoom_out");

  // fjern pause
  document.querySelector("#fanta1_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#fanta1_container").classList.remove("falling");
  document.querySelector("#fanta1_container").offsetWidth;
  document.querySelector("#fanta1_container").classList.add("falling");

  // gør det muligt at klikke på coin igen
  document.querySelector("#fanta1_container").addEventListener("click", clickFanta1);
}

function fanta2Gone() {
  console.log("fanta2Gone");
  document
    .querySelector("#fanta2_container")
    .removeEventListener("animationend", fanta2Gone);

  // fjern forsvind-animation
  document.querySelector("#fanta2_sprite").classList.remove("zoom_out");

  // fjern pause
  document.querySelector("#fanta2_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#fanta2_container").classList.remove("falling");
  document.querySelector("#fanta2_container").offsetWidth;
  document.querySelector("#fanta2_container").classList.add("falling");

  // gør det muligt at klikke på coin igen
  document.querySelector("#fanta2_container").addEventListener("click", clickFanta2);
}

function fanta3Gone() {
  console.log("fanta3Gone");
  document.querySelector("#fanta3_container").removeEventListener("animationend", fanta3Gone);

  // fjern forsvind-animation
  document.querySelector("#fanta3_sprite").classList.remove("zoom_out");

  // fjern pause
  document.querySelector("#fanta3_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#fanta3_container").classList.remove("falling");
  document.querySelector("#fanta3_container").offsetWidth;
  document.querySelector("#fanta3_container").classList.add("falling");

  // gør det muligt at klikke på coin igen
  document.querySelector("#fanta3_container").addEventListener("click", clickFanta3);
}















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

function coinGone() {
  // fjern event der bringer os herind
  document
    .querySelector("#coin1_container")
    .removeEventListener("animationend", coinGone);

  // fjern forsvind-animation
  document.querySelector("#coin1_sprite").classList.remove("zoom_out");

  // fjern pause
  document.querySelector("#coin1_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#coin1_container").classList.remove("falling");
  document.querySelector("#coin1_container").offsetWidth;
  document.querySelector("#coin1_container").classList.add("falling");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#coin1_container")
    .addEventListener("click", clickCoin);
}

function clickBomb() {
  console.log("Click bomb");
  // Forhindr gentagne clicks
  document
    .querySelector("#bomb_container")
    .removeEventListener("click", clickBomb);

  // Stop coin container
  document.querySelector("#bomb_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#bomb_sprite").classList.add("zoom_in");

  // når forsvind-animation er færdig: coinGone
  document
    .querySelector("#bomb_container")
    .addEventListener("animationend", bombGone);

  decrementLives();
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

function bombGone() {
  // fjern event der bringer os herind
  document
    .querySelector("#bomb_container")
    .removeEventListener("animationend", bombGone);

  // fjern forsvind-animation
  document.querySelector("#bomb_sprite").classList.remove("zoom_in");

  // fjern pause
  document.querySelector("#bomb_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#bomb_container").classList.remove("falling");
  document.querySelector("#bomb_container").offsetWidth;
  document.querySelector("#bomb_container").classList.add("falling");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#bomb_container")
    .addEventListener("click", clickBomb);
}
