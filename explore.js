// Grab shared variables across pages from localStorage
const shipSel = localStorage.getItem("shipSel");
const score = localStorage.getItem("score");
const planet = localStorage.getItem("planet");
const planetsrc = localStorage.getItem("planetsrc");
var canvas = document.getElementById("space");
var surface = canvas.getContext("2d");

// Display score
document.getElementById("score").innerText = "Score: " + score + "/32";
document.body.style.backgroundImage = "url(" + planetsrc + ")";

var img = document.createElement("img");
img.id = "I1"
img.src = "./images/magnify.png";
console.log(img)
img.height = 100;
img.width = 100;
img.style.left = '85%';
img.style.top = '15%';
img.style.position = 'absolute';
document.body.appendChild(img);

var img2 = document.createElement("img");
img2.id = "I2"
img2.src = "./images/thermometer.png";
console.log(img2)
img2.height = 100;
img2.width = 100;
img2.style.left = '90%';
img2.style.top = '90%';
img2.style.position = 'absolute';
document.body.appendChild(img2);

var img3 = document.createElement("img");
img3.id = "I3"
img3.src = "./images/clock.png";
console.log(img3)
img3.height = 100;
img3.width = 100;
img3.style.position = 'absolute';
img3.style.left = '50%';
img3.style.top = '50%';
document.body.appendChild(img3);

var img4 = document.createElement("img");
img4.id = "I4"
img4.src = "./images/tape.png";
console.log(img4)
img4.height = 100;
img4.width = 100;
img4.style.left = '15%';
img4.style.top = '50%';
img4.style.position = 'absolute';
document.body.appendChild(img4);


$('#I1').click(function() {
    alert( "Magnifying Glass" );
});

$('#I2').click(function() {
    alert( "thermometer" );
});

$('#I3').click(function() {
    alert( "clock" );
});

$('#I4').click(function() {
    alert( "tape measure" );
});
