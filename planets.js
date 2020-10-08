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

plan.font = "30px Arial";
plan.fillStyle = "yellow";

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
  drawPlanets(x,y);
}

// Function to draw planets on page load
function drawPlanets(x,y) {
  merX = (canvas.width/2) + mer.width - 110;
  merY = (canvas.height/2) - (sun.height/2) - mer.height;
  venX =  (canvas.width/2) - (sun.width/2) - ven.width;
  venY = (canvas.height/2) + (ven.height/2);
  earX = (canvas.width/2) + ear.width;
  earY = (canvas.height/2) + (ear.height/2);
  marX = (canvas.width/2) - mar.width - 150;
  marY = 20;
  jupX = 0;
  jupY = canvas.height - jup.height;
  satX = canvas.width - sat.width;
  satY = 0;
  uraX = 0;
  uraY = 0;
  nepX = canvas.width - nep.width;
  nepY = canvas.height - nep.height;
  plan.drawImage(mer, merX, merY);
  plan.drawImage(ven, venX, venY);
  plan.drawImage(ear, earX, earY);
  plan.drawImage(mar, marX, marY);
  plan.drawImage(jup, jupX, jupY);
  plan.drawImage(sat, satX, satY);
  plan.drawImage(ura, uraX, uraY);
  plan.drawImage(nep, nepX, nepY);
  plan.drawImage(sun, (canvas.width/2) - (sun.width/2), (canvas.height/2) - (sun.height/2));
  drawShip();
  
  var fX = canvas.width/2 - 150;
  var fY = 30;
  if (x > merX && x < merX + mer.width) {
	if (y > merY && y < merY + mer.height) {
	  plan.fillText("Press Enter to land on Mercury!", fX, fY);
	}
  }
  if (x > venX && x < venX + ven.width) {
	if (y > venY && y < venY + ven.height) {
	  plan.fillText("Press Enter to land on Venus!", fX, fY);
	}
  }
  if (x > earX && x < earX + ear.width) {
	if (y > earY && y < earY + ear.height) {
	  plan.fillText("Press Enter to land on Earth!", fX, fY);
	}
  }
  if (x > marX && x < marX + mar.width) {
	if (y > marY && y < marY + mar.height) {
	  plan.fillText("Press Enter to land on Mars!", fX, fY);
	}
  }
  if (x > jupX && x < jupX + jup.width) {
	if (y > jupY && y < jupY + jup.height) {
	  plan.fillText("Press Enter to land on Jupiter!", fX, fY);
	}
  }
  if (x > satX && x < satX + sat.width) {
	if (y > satY && y < satY + sat.height) {
	  plan.fillText("Press Enter to land on Saturn!", fX, fY);
	}
  }
  if (x > uraX && x < uraX + ura.width) {
	if (y > uraY && y < uraY + ura.height) {
	  plan.fillText("Press Enter to land on Uranus!", fX, fY);
	}
  }
  if (x > nepX && x < nepX + nep.width) {
	if (y > nepY && y < nepY + nep.height) {
	  plan.fillText("Press Enter to land on Neptune!", fX, fY);
	}
  }
}

// Function to draw the ship
function drawShip() {
  plan.drawImage(ship, xPos, yPos);
}
