"use strict";

window.addEventListener("load", ready);

let points = 0;
let lives = 0;


function ready() {
  console.log("JavaScript ready!");
  document.querySelector("#button_start").addEventListener("click", startGame);
  document.querySelector("#button_restart").addEventListener("click", startGame);
  document.querySelector("#button_go_to_start").addEventListener("click", showStartScreen);
}

function showGameScreen() {

  // Skjuler startskærm, game over og level complete
  document.querySelector("#start").classList.add("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
}

function showStartScreen() {

  // Fjerner hidden fra startskærm og tilføjer til game over og level complete
  document.querySelector("#start").classList.remove("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
}

function resetLives() {

  // Sætter lives til 3
  lives = 3;

  // Nulstiller visning af liv (hjerter vi ser)
  document.querySelector("#heart1_container").classList.remove("broken_heart");
  document.querySelector("#heart2_container").classList.remove("broken_heart");
  document.querySelector("#heart3_container").classList.remove("broken_heart");
  document.querySelector("#heart1_container").classList.add("active_heart");
  document.querySelector("#heart2_container").classList.add("active_heart");
  document.querySelector("#heart3_container").classList.add("active_heart");
}

function resetPoints() {

    // Nulstiller point
    points = 0;
    // Nulstiller vising af point
    displayPoints();
}

function startGame() {
  console.log("Starting game");

  resetLives();
  resetPoints();
  showGameScreen();

  // Starter baggrundsmusik
  document.querySelector("#sound_baggrundsmusik").play();

  // Starter animationer
  startAllAnimations();

  // Starter timer
  startTimer();

  // Registrerer click
  document.querySelector("#cola1_container").addEventListener("click", clickCola1);
  document.querySelector("#cola2_container").addEventListener("click", clickCola2);
  document.querySelector("#cola3_container").addEventListener("click", clickCola3);
  document.querySelector("#fanta1_container").addEventListener("click", clickFanta1);
  document.querySelector("#fanta2_container").addEventListener("click", clickFanta2);
  document.querySelector("#fanta3_container").addEventListener("click", clickFanta3);
  document.querySelector("#beer1_container").addEventListener("click", clickBeer1);
  document.querySelector("#beer2_container").addEventListener("click", clickBeer2);
  document.querySelector("#beer3_container").addEventListener("click", clickBeer3);
  document.querySelector("#laptop_container").addEventListener("click", clickLaptop);

  // Registrerer når bunden rammes
  document.querySelector("#cola1_container").addEventListener("animationiteration", colaRestart);
  document.querySelector("#cola2_container").addEventListener("animationiteration", colaRestart);
  document.querySelector("#cola3_container").addEventListener("animationiteration", colaRestart);
  document.querySelector("#fanta1_container").addEventListener("animationiteration", fantaRestart);
  document.querySelector("#fanta2_container").addEventListener("animationiteration", fantaRestart);
  document.querySelector("#fanta3_container").addEventListener("animationiteration", fantaRestart);
  document.querySelector("#beer1_container").addEventListener("animationiteration", beerRestart);
  document.querySelector("#beer2_container").addEventListener("animationiteration", beerRestart);
  document.querySelector("#beer3_container").addEventListener("animationiteration", beerRestart);
  document.querySelector("#laptop_container").addEventListener("animationiteration", laptopRestart);
}

function startAllAnimations() {
  // Starter falling animationer
  document.querySelector("#cola1_container").classList.add("moveright");
  document.querySelector("#cola2_container").classList.add("moveright");
  document.querySelector("#cola3_container").classList.add("moveright");
  document.querySelector("#fanta1_container").classList.add("falling");
  document.querySelector("#fanta2_container").classList.add("falling");
  document.querySelector("#fanta3_container").classList.add("falling");
  document.querySelector("#beer1_container").classList.add("falling");
  document.querySelector("#beer2_container").classList.add("falling");
  document.querySelector("#beer3_container").classList.add("falling");
  document.querySelector("#laptop_container").classList.add("falling");

  // Sætter position på klasserne
  document.querySelector("#cola1_container").classList.add("position1");
  document.querySelector("#cola2_container").classList.add("position1");
  document.querySelector("#cola3_container").classList.add("position1");
  document.querySelector("#fanta1_container").classList.add("position2");
  document.querySelector("#fanta2_container").classList.add("position2");
  document.querySelector("#fanta3_container").classList.add("position2");
  document.querySelector("#beer1_container").classList.add("position3");
  document.querySelector("#beer2_container").classList.add("position3");
  document.querySelector("#beer3_container").classList.add("position3");
  document.querySelector("#laptop_container").classList.add("position4");
}

/**************************************** CLICK FUNCTIONER *****************************/
/**************************************** FANTA ****************************************/

function clickFanta1() {
  console.log("Click fanta 1");

  // Forhindrer gentagne clicks
  document.querySelector("#fanta1_container").removeEventListener("click", clickFanta1);

  // Stopper fanta container
  document.querySelector("#fanta1_container").classList.add("paused");

  // Sætter forsvind-animationen på fanta
  document.querySelector("#fanta1_sprite").classList.add("zoom_out");

  // Når forsvind-animation er færdig: fantaGone
  document.querySelector("#fanta1_container").addEventListener("animationend", fanta1Gone);
  decrementLives();

  // Får fanta til at sige en lyd
  document.querySelector("#sound_fantafart").play();

}

function clickFanta2() {
  console.log("Click fanta 2");

  // Forhindrer gentagne clicks
  document.querySelector("#fanta2_container").removeEventListener("click", clickFanta2);

  // Stopper fanta container
  document.querySelector("#fanta2_container").classList.add("paused");

  // Sætter forsvind-animationen på coin
  document.querySelector("#fanta2_container").classList.add("zoom_out");

  // Når forsvind-animationen er færdig: fantaGone
  document.querySelector("#fanta2_container").addEventListener("animationend", fanta2Gone);
  decrementLives();

  // Får fanta til at sige en lyd
  document.querySelector("#sound_fantafart").play();
}

function clickFanta3() {
  console.log("Click fanta 3");

  // Forhindrer gentagne clicks
  document.querySelector("#fanta3_container").removeEventListener("click", clickFanta3);

  // Stopper fanta container
  document.querySelector("#fanta3_container").classList.add("paused");

  // Sætter forsvind-animationen på fanta
  document.querySelector("#fanta3_container").classList.add("zoom_out");

  // Når forsvind-animationen er færdig: fantaGone
  document.querySelector("#fanta3_container").addEventListener("animationend", fanta3Gone);
  decrementLives();

  // Får fanta til at sige en lyd
  document.querySelector("#sound_fantafart").play();
}

/**************************************** COLA ****************************************/

function clickCola1() {
  console.log("Click cola 1");

  // Forhindrer gentagne clicks
  document.querySelector("#cola1_container").removeEventListener("click", clickCola1);

  // Stopper cola container
  document.querySelector("#cola1_container").classList.add("paused");

  // Sætter forsvind-animationen på cola
  document.querySelector("#cola1_sprite").classList.add("zoom_out");

  // Når forsvind-animationen er færdig: colaGone
  document.querySelector("#cola1_container").addEventListener("animationend", cola1Gone);
  decrementLives();

  // Får cola til at sige en lyd
  document.querySelector("#sound_fantafart").play();
  
}

function clickCola2() {
  console.log("Click cola 2");

  // Forhindrer gentagne clicks
  document.querySelector("#cola2_container").removeEventListener("click", clickCola2);

  // Stopper cola container
  document.querySelector("#cola2_container").classList.add("paused");

  // Sætter forsvind-animationen på cola
  document.querySelector("#cola2_sprite").classList.add("zoom_out");

  // Når forsvind-animationen er færdig: colaGone
  document.querySelector("#cola2_container").addEventListener("animationend", cola2Gone);
  decrementLives();

  // Får cola til at sige en lyd
  document.querySelector("#sound_fantafart").play();
}

function clickCola3() {
  console.log("Click cola 3");

  // Forhindrer gentagne clicks
  document.querySelector("#cola3_container").removeEventListener("click", clickCola3);

  // Stopper cola container
  document.querySelector("#cola3_container").classList.add("paused");

  // Sætter forsvind-animationen på cola
  document.querySelector("#cola3_sprite").classList.add("zoom_out");

  // Når forsvind-animationen er færdig: colaGone
  document.querySelector("#cola3_container").addEventListener("animationend", cola3Gone);
  decrementLives();
  // Får cola til at sige en lyd
  document.querySelector("#sound_fantafart").play();
}

/**************************************** BEER ****************************************/

function clickBeer1() {
  console.log("Click beer 1");

  // Forhindrer gentagne clicks
  document.querySelector("#beer1_container").removeEventListener("click", clickBeer1);

  // Stopper beer container
  document.querySelector("#beer1_container").classList.add("paused");

  // Sætter forsvind-animationen på beer
  document.querySelector("#beer1_sprite").classList.add("zoom_out");

  // Når forsvind-animationen er færdig: beerGone
  document.querySelector("#beer1_container").addEventListener("animationend", beer1Gone);
  incrementPoints();

  // Får beer til at sige en lyd
  document.querySelector("#sound_beer").play();
}

function clickBeer2() {
  console.log("Click beer 2");

  // Forhindrer gentagne clicks
  document.querySelector("#beer2_container").removeEventListener("click", clickBeer2);

  // Stopper beer container
  document.querySelector("#beer2_container").classList.add("paused");

  // Sætter forsvind-animationen på beer
  document.querySelector("#beer2_sprite").classList.add("zoom_out");

  // Når forsvind-animationen er færdig: beerGone
  document.querySelector("#beer2_container").addEventListener("animationend", beer2Gone);
  incrementPoints();

  // Får beer til at sige en lyd
  document.querySelector("#sound_beer").play();
}

function clickBeer3() {
  console.log("Click beer 3");

  // Forhindrer gentagne clicks
  document.querySelector("#beer3_container").removeEventListener("click", clickBeer3);

  // Stopper beer container
  document.querySelector("#beer3_container").classList.add("paused");

  // Sætter forsvind-animationen på beer
  document.querySelector("#beer3_sprite").classList.add("zoom_out");

  // Når forsvind-animationen er færdig: beerGone
  document.querySelector("#beer3_container").addEventListener("animationend", beer3Gone);
  incrementPoints();

  // Får beer til at sige en lyd
  document.querySelector("#sound_beer").play();
}

/**************************************** LAPTOP **************************************/

function clickLaptop() {
  console.log("Click laptop");
  
  // Forhindrer gentagne clicks
  document.querySelector("#laptop_container").removeEventListener("click", clickLaptop);

  // Stopper laptop container
  document.querySelector("#laptop_container").classList.add("paused");

  // Sætter forsvind-animationen på laptop
  document.querySelector("#laptop_sprite").classList.add("zoom_out");

  // Når forsvind-animationen er færdig: laptopGone
  document.querySelector("#laptop_container").addEventListener("animationend", laptopGone);
  incrementPoints();

  // Får laptop til at sige en lyd
  document.querySelector("#sound_laptop").play();
}

/**************************************** GONE ****************************************/

function fanta1Gone() {
  console.log("Fanta 1 gone");

  // Fjerner eventet der bringer os herind
  document.querySelector("#fanta1_container").removeEventListener("animationend", fanta1Gone);

  // Fjerner forsvind-animationen
  document.querySelector("#fanta1_sprite").classList.remove("zoom_out");

  // Fjerner pause
  document.querySelector("#fanta1_container").classList.remove("paused");

  // Genstarter falling animationen
  document.querySelector("#fanta1_container").classList.remove("falling");
  document.querySelector("#fanta1_container").offsetWidth;
  document.querySelector("#fanta1_container").classList.add("falling");

  // Gør det muligt at klikke på fanta igen
  document.querySelector("#fanta1_container").addEventListener("click", clickFanta1);
}

function fanta2Gone() {
  console.log("Fanta 2 gone");

  // Fjerner eventet der bringer os herind
  document.querySelector("#fanta2_container").removeEventListener("animationend", fanta2Gone);

  // Fjerner forsvind-animationen
  document.querySelector("#fanta2_sprite").classList.remove("zoom_out");

  // Fjerner pause
  document.querySelector("#fanta2_container").classList.remove("paused");

  // Genstarter falling animationen
  document.querySelector("#fanta2_container").classList.remove("falling");
  document.querySelector("#fanta2_container").offsetWidth;
  document.querySelector("#fanta2_container").classList.add("falling");

  // Gør det muligt at klikke på fanta igen
  document.querySelector("#fanta2_container").addEventListener("click", clickFanta2);
}

function fanta3Gone() {
  console.log("Fanta 3 gone");

  // Fjerner eventet der bringer os herind
  document.querySelector("#fanta3_container").removeEventListener("animationend", fanta3Gone);

  // Fjerner forsvind-animationen
  document.querySelector("#fanta3_sprite").classList.remove("zoom_out");

  // Fjerner pause
  document.querySelector("#fanta3_container").classList.remove("paused");

  // Genstarter falling animationen
  document.querySelector("#fanta3_container").classList.remove("falling");
  document.querySelector("#fanta3_container").offsetWidth;
  document.querySelector("#fanta3_container").classList.add("falling");

  // Gør det muligt at klikke på fanta igen
  document.querySelector("#fanta3_container").addEventListener("click", clickFanta3);
}

function cola1Gone() {
  console.log("Cola 1 gone");

  // Fjerner eventet der bringer os herind
  document.querySelector("#cola1_container").removeEventListener("animationend", cola1Gone);

  // Fjerner forsvind-animationen
  document.querySelector("#cola1_sprite").classList.remove("zoom_out");

  // Fjerner pause
  document.querySelector("#cola1_container").classList.remove("paused");

  // Genstarter moveright animationen
  document.querySelector("#cola1_container").classList.remove("moveright");
  document.querySelector("#cola1_container").offsetWidth;
  document.querySelector("#cola1_container").classList.add("moveright");

  // Gør det muligt at klikke på cola igen
  document.querySelector("#cola1_container").addEventListener("click", clickCola1);
}

function cola2Gone() {
  console.log("Cola 2 gone");

  // Fjerner eventet der bringer os herind
  document.querySelector("#cola2_container").removeEventListener("animationend", cola2Gone);

  // Fjerner forsvind-animationen
  document.querySelector("#cola2_sprite").classList.remove("zoom_out");

  // Fjerner pause
  document.querySelector("#cola2_container").classList.remove("paused");

  // Genstarter moveright animationen
  document.querySelector("#cola2_container").classList.remove("moveright");
  document.querySelector("#cola2_container").offsetWidth;
  document.querySelector("#cola2_container").classList.add("moveright");

  // Gør det muligt at klikke på cola igen
  document.querySelector("#cola2_container").addEventListener("click", clickCola2);
}

function cola3Gone() {
  console.log("Cola 3 gone");

  // Fjerner eventet der bringer os herind
  document.querySelector("#cola3_container").removeEventListener("animationend", cola3Gone);

  // Fjerner forsvind-animationen
  document.querySelector("#cola3_sprite").classList.remove("zoom_out");

  // Fjerner pause
  document.querySelector("#cola3_container").classList.remove("paused");

  // Genstarter moveright animationen
  document.querySelector("#cola3_container").classList.remove("moveright");
  document.querySelector("#cola3_container").offsetWidth;
  document.querySelector("#cola3_container").classList.add("moveright");

  // Gør det muligt at klikke på cola igen
  document.querySelector("#cola3_container").addEventListener("click", clickCola3);
}

function beer1Gone() {
  console.log("Beer 1 gone");

  // Fjerner eventet der bringer os herind
  document.querySelector("#beer1_container").removeEventListener("animationend", beer1Gone);

  // Fjerner forsvind-animationen
  document.querySelector("#beer1_sprite").classList.remove("zoom_out");

  // Fjerner pause
  document.querySelector("#beer1_container").classList.remove("paused");

  // Genstarter falling animationen
  document.querySelector("#beer1_container").classList.remove("falling");
  document.querySelector("#beer1_container").offsetWidth;
  document.querySelector("#beer1_container").classList.add("falling");

  // Gør det muligt at klikke på beer igen
  document.querySelector("#cola1_container").addEventListener("click", clickBeer1);
}

function beer2Gone() {
  console.log("Beer 2 Gone");

  // Fjerner eventet der bringer os herind
  document.querySelector("#beer2_container").removeEventListener("animationend", beer2Gone);

  // Fjerner forsvind-animationen
  document.querySelector("#beer2_sprite").classList.remove("zoom_out");

  // Fjerner pause
  document.querySelector("#beer2_container").classList.remove("paused");

  // Genstarter falling animationen
  document.querySelector("#beer2_container").classList.remove("falling");
  document.querySelector("#beer2_container").offsetWidth;
  document.querySelector("#beer2_container").classList.add("falling");

  // Gør det muligt at klikke på beer igen
  document.querySelector("#beer2_container").addEventListener("click", clickBeer2);
}

function beer3Gone() {
  console.log("Beer 3 gone");

  // Fjerner eventet der bringer os herind
  document.querySelector("#beer3_container").removeEventListener("animationend", beer3Gone);

  // Fjerner forsvind-animationen
  document.querySelector("#beer3_sprite").classList.remove("zoom_out");

  // Fjerner pause
  document.querySelector("#beer3_container").classList.remove("paused");

  // Genstarter falling animationen
  document.querySelector("#beer3_container").classList.remove("falling");
  document.querySelector("#beer3_container").offsetWidth;
  document.querySelector("#beer3_container").classList.add("falling");

  // Gør det muligt at klikke på beer igen
  document.querySelector("#beer3_container").addEventListener("click", clickBeer3);
}

function laptopGone() {
  console.log("Laptop gone");

  // Fjerner eventet der bringer os herind
  document.querySelector("#laptop_container").removeEventListener("animationend", laptopGone);

  // Fjerner forsvind-animationen
  document.querySelector("#laptop_sprite").classList.remove("zoom_out");

  // Fjerner pause
  document.querySelector("#laptop_container").classList.remove("paused");

  // Genstarter falling animationen
  document.querySelector("#laptop_container").classList.remove("falling");
  document.querySelector("#laptop_container").offsetWidth;
  document.querySelector("#laptop_container").classList.add("falling");

  // Gør det muligt at klikke på laptop igen
  document.querySelector("#laptop_container").addEventListener("click", clickLaptop);
}

/**************************************** RESTART *************************************/

function colaRestart() {
  console.log("Cola restart");
  const cola = this;

  // Genstarter falling animationen
  cola.classList.remove("moveright");
  cola.offsetWidth;
  cola.classList.add("moveright");

  // Fjerner alle positioner
  cola.classList.remove("position1", "position2", "position3", "position4", "position5");

  // Sætter position til en ny klasse
  const p = Math.ceil(Math.random() * 5);
  cola.classList.add(`position${p}`);
}

function fantaRestart() {
  console.log("Fanta restart");
  const fanta = this;

  // Genstarter falling animationen
  fanta.classList.remove("falling");
  fanta.offsetWidth;
  fanta.classList.add("falling");

  // Fjerner alle positioner
  fanta.classList.remove("position1", "position2", "position3", "position4", "position5");

  // Sætter position til en ny klasse
  const p = Math.ceil(Math.random() * 5);
  fanta.classList.add(`position${p}`);
}

function beerRestart() {
  console.log("Beer restart");
  const beer = this;

  // Genstarter falling animationen
  beer.classList.remove("falling");
  beer.offsetWidth;
  beer.classList.add("falling");

  // Fjerner alle positioner
  beer.classList.remove("position1", "position2", "position3", "position4", "position5");

  // Sætter position til en ny klasse
  const p = Math.ceil(Math.random() * 5);
  beer.classList.add(`position${p}`);
}

function laptopRestart() {
  console.log("Laptop restart");
  const laptop = this;

  // Genstarter falling animationen
  laptop.classList.remove("falling");
  laptop.offsetWidth;
  laptop.classList.add("falling");

  // Fjerner alle positioner
  laptop.classList.remove("position1", "position2", "position3", "position4", "position5");

  // Sætter position til en ny klasse
  const p = Math.ceil(Math.random() * 5);
  laptop.classList.add(`position${p}`);
}

/**************************************** DECREMENT ***********************************/

function decrementLives() {
  console.log("Mist et liv");
  console.log(lives);
  if (lives <= 0) {
    gameOver();
  } else {
    displayDecrementedLives();
    lives--;
  }
}

function displayDecrementedLives() {
  console.log(`#heart${lives}`);
  document.querySelector(`#heart${lives}_container`).classList.remove("active_heart");
  document.querySelector(`#heart${lives}_container`).classList.add("broken_heart");
}

/**************************************** INCREMENT POINTS *****************************/

function showIncrementedLives() {
  document.querySelector("#heart" + lives).classList.remove("broken_heart");
  document.querySelector("#heart" + lives).classList.add("active_heart");
}

function incrementPoints() {
  console.log("Giv point");
  points++;
  console.log("har nu " + points + " point");
  displayPoints();
}

function displayPoints() {
  console.log("Vis points");
  document.querySelector("#score_count").textContent = points;
}

/**************************************** GAME OVER ************************************/

function gameOver() {
  console.log("Game Over");
  document.querySelector("#game_over").classList.remove("hidden");
  stopGame();
  document.querySelector("#sound_game_over").play();

  // Viser antal points
  document.querySelector("#game_over_points").textContent = points;
}

/*************************************** LEVEL COMPLETE ********************************/

function levelComplete() {
  console.log("Level Complete");
  document.querySelector("#level_complete").classList.remove("hidden");
  stopGame();

  // Afspiller level_complete lyd
  document.querySelector("#sound_level_complete").play();

  // Viser antal points
  document.querySelector("#level_complete_points").textContent = points;
}

/*************************************** TIMER *****************************************/

function startTimer() {

  // Sætter timer-animationen (shrink) i gang ved at tilføje klassen shrink til time_sprite
  document.querySelector("#time_sprite").classList.add("shrink");

  // Tilføjer en eventlistener som lytter efter at animationen er færdig (animationend) og kalder funktionen timeIsUp
  document.querySelector("#time_sprite").addEventListener("animationend", timeIsUp);
}

function timeIsUp() {
  console.log("Tiden er gået!");

  if (points >= 10) {
    levelComplete();
  } else {
    gameOver();
  }
}

/*************************************** STOP GAME *************************************/

function stopGame() {

  // Stopper animationerne
  document.querySelector("#fanta1_container").classList.remove("falling");
  document.querySelector("#fanta2_container").classList.remove("falling");
  document.querySelector("#fanta3_container").classList.remove("falling");
  document.querySelector("#cola1_container").classList.remove("moveright");
  document.querySelector("#cola2_container").classList.remove("moveright");
  document.querySelector("#cola3_container").classList.remove("moveright");
  document.querySelector("#beer1_container").classList.remove("falling");
  document.querySelector("#beer2_container").classList.remove("falling");
  document.querySelector("#beer3_container").classList.remove("falling");
  document.querySelector("#laptop_container").classList.remove("falling");

  // Fjerner click
  document.querySelector("#fanta1_container").removeEventListener("click", clickFanta1);
  document.querySelector("#fanta2_container").removeEventListener("click", clickFanta2);
  document.querySelector("#fanta3_container").removeEventListener("click", clickFanta3);
  document.querySelector("#cola1_container").removeEventListener("click", clickCola1);
  document.querySelector("#cola2_container").removeEventListener("click", clickCola2);
  document.querySelector("#cola3_container").removeEventListener("click", clickCola3);
  document.querySelector("#beer1_container").removeEventListener("click", clickBeer1);
  document.querySelector("#beer2_container").removeEventListener("click", clickBeer2);
  document.querySelector("#beer3_container").removeEventListener("click", clickBeer3);
  document.querySelector("#laptop_container").removeEventListener("click", clickLaptop);

  // Stopper og nulstiller lyde, fx baggrundsmusik
  document.querySelector("#sound_baggrundsmusik").pause();
  document.querySelector("#sound_baggrundsmusik").currentTime = 0;

  // Nulstiller timeren - fjerner animationen fra timeren (fjerner klassen shrink fra time_sprite)
  document.querySelector("#time_sprite").classList.remove("shrink");
}






























































































































































// // Nulstiller points og liv
  // points = 0;
  // lives = 3;

  // Skjuler startskærm
  // document.querySelector("#start").classList.add("hidden");

// function decrementLives() {
//   console.log("mist et liv");

//   showDecrementedLives();
//   lives--;

//   if (lives === 0) {
//     gameOver();
//   }
// }

// function decrementPoints() {
//   points--;
//   console.log(points);
//   displayPoints();
// }

// function incrementPoints() {
//   console.log("Giv point");
//   points++;
//   console.log("Du har nu " + points + " point");
//   displayPoints();

//   if (points >= 15) {
//     levelComplete();
//   }
// }

// function incrementPoints() {
//   console.log("Giv point");
//   //short version
//   //points += 5
//   points = points + 5;
//   console.log("Du har nu " + points + " point");
//   displayPoints();

//   if (points >= 15) {
//     levelComplete();
//   }
// }

// //bliver kaldt når den når bunden
// document.querySelector("#laptop_container").addEventListener('animationiteration', test)
// //bliver kaldt når man klikker på den
// document.querySelector("#laptop_container").addEventListener('animationend', test)

// function levelComplete() {
//   console.log("Level Complete");
//   document.querySelector("#level_complete").classList.remove("hidden");
//   gameElementsCleanUp();
//   document.querySelector("#sound_fantafart").play();
// }

// function gameElementsCleanUp() {
//   const gameElements = document.querySelector("#game_elements");
//   gameElements.remove();
// }

// gameElementsCleanUp();

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