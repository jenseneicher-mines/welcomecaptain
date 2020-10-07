// Declare variables
var canvas = document.getElementById("space");
var ship = canvas.getContext("2d");
var mer = canvas.getContext("2d");
var ven = canvas.getContext("2d");
var ear = canvas.getContext("2d");
var mar = canvas.getContext("2d");
var jup = canvas.getContext("2d");
var sat = canvas.getContext("2d");
var ura = canvas.getContext("2d");
var nep = canvas.getContext("2d");
var shipImg = new Image();
var merImg = new Image();
var venImg = new Image();
var earImg = new Image();
var marImg = new Image();
var jupImg = new Image();
var satImg = new Image();
var uraImg = new Image();
var nepImg = new Image();
var xPos = 20;
var yPos = 20;

// Source of the image to be used
shipImg.src = "./images/ufo.jpg";
merImg.src = "./images/mercury.jpg";
venImg.src = "./images/venus.jpg";
earImg.src = "./images/earth.jpg";
marImg.src = "./images/mars.jpg";
jupImg.src = "./images/jupiter.jpg";
satImg.src = "./images/saturn.jpg";
uraImg.src = "./images/uranus.jpg";
nepImg.src = "./images/neptune.jpg";

// Event to listen for keyboard activity
document.addEventListener("keydown", checkKeyPressed, false);

// Function of what to do when keyboard is pressed
function checkKeyPressed(e) {
  switch(e.keyCode) {
	// Up key
	case 38:
	  yPos -= 5;
	  if (yPos < 0) {
		yPos = 0;
	  }
	  break;
	// Down key
	case 40:
	  yPos += 5;
	  if (yPos > canvas.height - shipImg.height) {
		  yPos = canvas.height - shipImg.height;
	  }
	  break;
	// Right key
	case 39:
	  xPos += 5;
	  if (xPos > canvas.width - shipImg.width) {
		xPos = canvas.width - shipImg.width;
	  }
	  break;
	// Left key
	case 37:
	  xPos -= 5;
	  if (xPos < 0) {
		xPos = 0;
      }
	  break;
  }
  drawShip();
}


// Function to draw planets on page load
// Images need to be scaled down and positioned appropriately
function drawPlanets() {
  mer.drawImage(merImg, 200, 200);
  ven.drawImage(venImg, 100, 100);
  ear.drawImage(earImg, 50, 50);
  mar.drawImage(marImg, 20, 20);
  jup.drawImage(jupImg, 300, 300);
  sat.drawImage(satImg, 400, 400);
  ura.drawImage(uraImg, 60, 60);
  nep.drawImage(nepImg, 250, 250);
  drawShip();
}

// Function to draw the ship
function drawShip() {
  ship.drawImage(shipImg, xPos, yPos);
}