// Declare variables
var canvas = document.getElementById("space");
var plan = canvas.getContext("2d");
var ship = new Image();
var mer = new Image();
var ven = new Image();
var ear = new Image();
var mar = new Image();
var jup = new Image();
var sat = new Image();
var ura = new Image();
var nep = new Image();
var sun = new Image();
var xPos = 60;
var yPos = 60;

// Source of the image to be used
ship.src = "./images/ufo.jpg";
mer.src = "./images/mercury_sm.jpg";
ven.src = "./images/venus_sm.jpg";
ear.src = "./images/earth_sm.jpg";
mar.src = "./images/mars_sm.jpg";
jup.src = "./images/jupiter_sm.jpg";
sat.src = "./images/saturn_sm.jpg";
ura.src = "./images/uranus_sm.jpg";
nep.src = "./images/neptune_sm.jpg";
sun.src = "./images/sun.jpg";

// Event to listen for keyboard activity
document.addEventListener("mousemove", shipMove, false);

function shipMove(event) {
  var x = new Number();
  var y = new Number();
  var loc = false;

  if (event.x != undefined && event.y != undefined) {
    x = event.x;
    y = event.y;
  // Firefox method
  } else {
    x = event.clientX + document.body.scrollLeft +
    document.documentElement.scrollLeft;
    y = event.clientY + document.body.scrollTop +
    document.documentElement.scrollTop;
  }

  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;
  
  xPos = x - (ship.width/2);
  yPos = y - (ship.height/2);
  
  plan.clearRect(0, 0, canvas.width, canvas.height);
  drawPlanets();
}

// Function to draw planets on page load
function drawPlanets() {
  plan.drawImage(mer, (canvas.width/2) + mer.width - 110, (canvas.height/2) - (sun.height/2) - mer.height);
  plan.drawImage(ven, (canvas.width/2) - (sun.width/2) - ven.width, (canvas.height/2) + (ven.height/2));
  plan.drawImage(ear, (canvas.width/2) + ear.width, (canvas.height/2) + (ear.height/2));
  plan.drawImage(mar, (canvas.width/2) - mar.width - 150, 20);
  plan.drawImage(jup, 0,  canvas.height - jup.height);
  plan.drawImage(sat, canvas.width - sat.width, 0);
  plan.drawImage(ura, 0, 0);
  plan.drawImage(nep, canvas.width - nep.width, canvas.height - nep.height);
  plan.drawImage(sun, (canvas.width/2) - (sun.width/2), (canvas.height/2) - (sun.height/2));
  drawShip();
}

// Function to draw the ship
function drawShip() {
  plan.drawImage(ship, xPos, yPos);
}