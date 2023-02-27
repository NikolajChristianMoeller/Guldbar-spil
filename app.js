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

/**************************************** CLICK FUNCTIONER *****************************/
/**************************************** FANTA ****************************************/

function clickFanta1() {
  console.log("Click Fanta1");
  // Forhindr gentagne clicks
  document
    .querySelector("#fanta1_container")
    .removeEventListener("click", clickFanta1);

  // Stop coin container
  document.querySelector("#fanta1_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#fanta1_sprite").classList.add("zoom_out");
  // når forsvind-animation er færdig: coinGone
  document
    .querySelector("#fanta1_container")
    .addEventListener("animationend", fanta1Gone);
  decrementLives();
}

function clickFanta2() {
  console.log("Click Fanta2");
  // Forhindr gentagne clicks
  document
    .querySelector("#fanta2_container")
    .removeEventListener("click", clickFanta2);

  // Stop coin container
  document.querySelector("#fanta2_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#fanta2_container").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document
    .querySelector("#fanta2_container")
    .addEventListener("animationend", fanta2Gone);
  decrementLives();
}

function clickFanta3() {
  console.log("Click Fanta3");
  // Forhindr gentagne clicks
  document
    .querySelector("#fanta3_container")
    .removeEventListener("click", clickFanta3);

  // Stop coin container
  document.querySelector("#fanta3_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#fanta3_container").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document
    .querySelector("#fanta3_container")
    .addEventListener("animationend", fanta3Gone);
  decrementLives();
}

/**************************************** COLA ****************************************/

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
  decrementLives();
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
  decrementLives();
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
  decrementLives();
}

/**************************************** BEER ****************************************/

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
  incrementPoints();
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
  incrementPoints();
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
  incrementPoints();
}

/**************************************** LAPTOP **************************************/

function clickLaptop() {
  console.log("Click Laptop");
  // Forhindr gentagne clicks
  document
    .querySelector("#laptop_container")
    .removeEventListener("click", clickLaptop);

  // Stop coin container
  document.querySelector("#laptop_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#laptop_sprite").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document
    .querySelector("#laptop_container")
    .addEventListener("animationend", laptopGone);
  incrementPoints();
}

/**************************************** GONE ****************************************/

function fanta1Gone() {
  console.log("fanta1Gone");
  document
    .querySelector("#fanta1_container")
    .removeEventListener("animationend", fanta1Gone);

  // fjern forsvind-animation
  document.querySelector("#fanta1_sprite").classList.remove("zoom_out");

  // fjern pause
  document.querySelector("#fanta1_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#fanta1_container").classList.remove("falling");
  document.querySelector("#fanta1_container").offsetWidth;
  document.querySelector("#fanta1_container").classList.add("falling");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#fanta1_container")
    .addEventListener("click", clickFanta1);
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
  document
    .querySelector("#fanta2_container")
    .addEventListener("click", clickFanta2);
}

function fanta3Gone() {
  console.log("fanta3Gone");
  document
    .querySelector("#fanta3_container")
    .removeEventListener("animationend", fanta3Gone);

  // fjern forsvind-animation
  document.querySelector("#fanta3_sprite").classList.remove("zoom_out");

  // fjern pause
  document.querySelector("#fanta3_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#fanta3_container").classList.remove("falling");
  document.querySelector("#fanta3_container").offsetWidth;
  document.querySelector("#fanta3_container").classList.add("falling");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#fanta3_container")
    .addEventListener("click", clickFanta3);
}

function cola1Gone() {
  console.log("cola1Gone");
  document
    .querySelector("#cola1_container")
    .removeEventListener("animationend", cola1Gone);

  // fjern forsvind-animation
  document.querySelector("#cola1_sprite").classList.remove("zoom_out");

  // fjern pause
  document.querySelector("#cola1_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#cola1_container").classList.remove("falling");
  document.querySelector("#cola1_container").offsetWidth;
  document.querySelector("#cola1_container").classList.add("falling");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#cola1_container")
    .addEventListener("click", clickCola1);
}

function cola2Gone() {
  console.log("cola2Gone");
  document
    .querySelector("#cola2_container")
    .removeEventListener("animationend", cola2Gone);

  // fjern forsvind-animation
  document.querySelector("#cola2_sprite").classList.remove("zoom_out");

  // fjern pause
  document.querySelector("#cola2_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#cola2_container").classList.remove("falling");
  document.querySelector("#cola2_container").offsetWidth;
  document.querySelector("#cola2_container").classList.add("falling");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#cola2_container")
    .addEventListener("click", clickCola2);
}

function cola3Gone() {
  console.log("cola3Gone");
  document
    .querySelector("#cola3_container")
    .removeEventListener("animationend", cola3Gone);

  // fjern forsvind-animation
  document.querySelector("#cola3_sprite").classList.remove("zoom_out");

  // fjern pause
  document.querySelector("#cola3_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#cola3_container").classList.remove("falling");
  document.querySelector("#cola3_container").offsetWidth;
  document.querySelector("#cola3_container").classList.add("falling");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#cola3_container")
    .addEventListener("click", clickCola3);
}

function beer1Gone() {
  console.log("beer1Gone");
  document
    .querySelector("#beer1_container")
    .removeEventListener("animationend", beer1Gone);

  // fjern forsvind-animation
  document.querySelector("#beer1_sprite").classList.remove("zoom_out");

  // fjern pause
  document.querySelector("#beer1_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#beer1_container").classList.remove("falling");
  document.querySelector("#beer1_container").offsetWidth;
  document.querySelector("#beer1_container").classList.add("falling");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#cola1_container")
    .addEventListener("click", clickBeer1);
}

function beer2Gone() {
  console.log("beer2Gone");
  document
    .querySelector("#beer2_container")
    .removeEventListener("animationend", beer2Gone);

  // fjern forsvind-animation
  document.querySelector("#beer2_sprite").classList.remove("zoom_out");

  // fjern pause
  document.querySelector("#beer2_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#beer2_container").classList.remove("falling");
  document.querySelector("#beer2_container").offsetWidth;
  document.querySelector("#beer2_container").classList.add("falling");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#beer2_container")
    .addEventListener("click", clickBeer2);
}

function beer3Gone() {
  console.log("beer3Gone");
  document
    .querySelector("#beer3_container")
    .removeEventListener("animationend", beer3Gone);

  // fjern forsvind-animation
  document.querySelector("#beer3_sprite").classList.remove("zoom_out");

  // fjern pause
  document.querySelector("#beer3_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#beer3_container").classList.remove("falling");
  document.querySelector("#beer3_container").offsetWidth;
  document.querySelector("#beer3_container").classList.add("falling");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#beer3_container")
    .addEventListener("click", clickBeer3);
}

/**************************************** DECREMENT ***********************************/

function decrementLives() {
  console.log("decrementLives");
  console.log(lives);

  if (lives <= 0) {
    gameOver();
  } else {
    displayDecrementedLives();
  }
  lives--;
}

function displayDecrementedLives() {
  console.log(`#heart${lives}`);
  document
    .querySelector("#heart_container" + lives)
    .classList.remove("active_heart");
  document
    .querySelector("#heart_container" + lives)
    .classList.add("broken_heart");
}

function decrementPoints() {
  points--;
  console.log(points);
  displayPoints();
}

/**************************************** INCREMENT POINTS *****************************/

function showIncrementedLives() {
  document.querySelector("#heart" + lives).classList.remove("broken_heart");
  document.querySelector("#heart" + lives).classList.add("active_heart");
}

function incrementPoints() {
  console.log("Giv point");
  points++;
  console.log("Du har nu " + points + " point");
  displayPoints();

  if (points >= 15) {
    levelComplete();
  }
}

function displayPoints() {
  console.log("displayPoints");
  document.querySelector("#coin_count").textContent = points;
}

/**************************************** GAME OVER ************************************/

function gameOver() {
  console.log("Game Over");
  document.querySelector("#game_over").classList.remove("hidden");
}

/**************************************** LEVEL COMPLETE *******************************/

function levelComplete() {
  console.log("Level Complete");
  document.querySelector("#level_complete").classList.remove("hidden");
}

// function coinGone() {
//   // fjern event der bringer os herind
//   document
//     .querySelector("#coin1_container")
//     .removeEventListener("animationend", coinGone);

//   // fjern forsvind-animation
//   document.querySelector("#coin1_sprite").classList.remove("zoom_out");

//   // fjern pause
//   document.querySelector("#coin1_container").classList.remove("paused");

//   // genstart falling animation
//   document.querySelector("#coin1_container").classList.remove("falling");
//   document.querySelector("#coin1_container").offsetWidth;
//   document.querySelector("#coin1_container").classList.add("falling");

//   // gør det muligt at klikke på coin igen
//   document
//     .querySelector("#coin1_container")
//     .addEventListener("click", clickCoin);
// }

// function clickBomb() {
//   console.log("Click bomb");
//   // Forhindr gentagne clicks
//   document
//     .querySelector("#bomb_container")
//     .removeEventListener("click", clickBomb);

//   // Stop coin container
//   document.querySelector("#bomb_container").classList.add("paused");

//   // sæt forsvind-animation på coin
//   document.querySelector("#bomb_sprite").classList.add("zoom_in");

//   // når forsvind-animation er færdig: coinGone
//   document
//     .querySelector("#bomb_container")
//     .addEventListener("animationend", bombGone);
//   decrementLives();
// }

// function bombGone() {
//   // fjern event der bringer os herind
//   document
//     .querySelector("#bomb_container")
//     .removeEventListener("animationend", bombGone);

//   // fjern forsvind-animation
//   document.querySelector("#bomb_sprite").classList.remove("zoom_in");

//   // fjern pause
//   document.querySelector("#bomb_container").classList.remove("paused");

//   // genstart falling animation
//   document.querySelector("#bomb_container").classList.remove("falling");
//   document.querySelector("#bomb_container").offsetWidth;
//   document.querySelector("#bomb_container").classList.add("falling");

//   // gør det muligt at klikke på coin igen
//   document
//     .querySelector("#bomb_container")
//     .addEventListener("click", clickBomb);
