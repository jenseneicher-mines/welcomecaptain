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
var sun = canvas.getContext("2d");
var shipImg = new Image();
var merImg = new Image();
var venImg = new Image();
var earImg = new Image();
var marImg = new Image();
var jupImg = new Image();
var satImg = new Image();
var uraImg = new Image();
var nepImg = new Image();
var sunImg = new Image();
var xPos = 60;
var yPos = 60;

// Source of the image to be used
shipImg.src = "./images/ufo.jpg";
merImg.src = "./images/mercury_sm.jpg";
venImg.src = "./images/venus_sm.jpg";
earImg.src = "./images/earth_sm.jpg";
marImg.src = "./images/mars_sm.jpg";
jupImg.src = "./images/jupiter_sm.jpg";
satImg.src = "./images/saturn_sm.jpg";
uraImg.src = "./images/uranus_sm.jpg";
nepImg.src = "./images/neptune_sm.jpg";
sunImg.src = "./images/sun.jpg";

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
  drawPlanets();
}


// Function to draw planets on page load
// Images need to be scaled down and positioned appropriately
function drawPlanets() {
  mer.drawImage(merImg, (canvas.width/2) + merImg.width - 110, (canvas.height/2) - (sunImg.height/2) - merImg.height);
  ven.drawImage(venImg, (canvas.width/2) - (sunImg.width/2) - venImg.width, (canvas.height/2) + (venImg.height/2));
  ear.drawImage(earImg, (canvas.width/2) + earImg.width, (canvas.height/2) + (earImg.height/2));
  mar.drawImage(marImg, (canvas.width/2) - marImg.width - 150, 20);
  jup.drawImage(jupImg, 0,  canvas.height - jupImg.height);
  sat.drawImage(satImg, canvas.width - satImg.width, 0);
  ura.drawImage(uraImg, 0, 0);
  nep.drawImage(nepImg, canvas.width - nepImg.width, canvas.height - nepImg.height);
  sun.drawImage(sunImg, (canvas.width/2) - (sunImg.width/2), (canvas.height/2) - (sunImg.height/2));
  drawShip();
}

// Function to draw the ship
function drawShip() {
  ship.drawImage(shipImg, xPos, yPos);
}