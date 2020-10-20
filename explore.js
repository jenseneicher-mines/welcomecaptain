// Grab shared variables across pages from localStorage
const shipSel = localStorage.getItem("shipSel");
var score = localStorage.getItem("score");
const planet = localStorage.getItem("planet");
const planetsrc = localStorage.getItem("planetsrc");
const fact1 = localStorage.getItem("fact1");
const fact2 = localStorage.getItem("fact2");
const fact3 = localStorage.getItem("fact3");
const fact4 = localStorage.getItem("fact4");
console.log(planetsrc);

// Display score
document.getElementById("score").innerText = "Score: " + score + "/32";
document.body.style.backgroundImage = "url(" + planetsrc + ")";

// random percent for placement of object from left, goes to 90 so things are not off the screen
var leftPer = Math.floor((Math.random() * 90) + 1) + "%";
// random percent for placement of object from top, starts from 2 to account for text at top of screen
var topPer = Math.floor((Math.random() * 90) + 13) + "%";
var img = document.createElement("img");
img.id = "I1";
img.src = "./images/magnify.png";
console.log(img);
img.height = 100;
img.width = 100;
img.style.left = leftPer;
img.style.top = topPer;
img.style.position = 'absolute';
document.body.appendChild(img);

// getting new random percents for placement
leftPer = Math.floor((Math.random() * 90) + 1) + "%";
topPer = Math.floor((Math.random() * 90) + 13) + "%";
var img2 = document.createElement("img");
img2.id = "I2";
img2.src = "./images/thermometer.png";
console.log(img2);
img2.height = 100;
img2.width = 100;
img2.style.left = leftPer;
img2.style.top = topPer;
img2.style.position = 'absolute';
document.body.appendChild(img2);

// getting new random percents for placement
leftPer = Math.floor((Math.random() * 90) + 1) + "%";
topPer = Math.floor((Math.random() * 90) + 13) + "%";
var img3 = document.createElement("img");
img3.id = "I3";
img3.src = "./images/clock.png";
console.log(img3);
img3.height = 100;
img3.width = 100;
img3.style.position = 'absolute';
img3.style.left = leftPer;
img3.style.top = topPer;
document.body.appendChild(img3);

// getting new random percents for placement
leftPer = Math.floor((Math.random() * 90) + 1) + "%";
topPer = Math.floor((Math.random() * 90) + 13) + "%";
var img4 = document.createElement("img");
img4.id = "I4";
img4.src = "./images/tape.png";
console.log(img4);
img4.height = 100;
img4.width = 100;
img4.style.left = leftPer;
img4.style.top = topPer;
img4.style.position = 'absolute';
document.body.appendChild(img4);

var text = document.createElement('text');
text.type = "text";
text.style.fontSize = "20px";
text.style.fontWeight = "bold";
text.style.backgroundColor = "lightgrey";
text.style.borderRadius = "25px";
text.style.paddingLeft = "25px";
text.style.paddingRight = "25px";

var I1clicked = false;
$('#I1').click(function () {
    text.textContent = fact1;
    text.style.top = img.style.top;
    text.style.left = img.style.left;
    text.style.position = 'absolute';
    document.body.appendChild(text);
    //check if item was already clicked
    if (!I1clicked) {
        score++;
        // sends you to win page if at 32 points
        if (score == 32) {
            window.open("win.html", "_self");
        }
        document.getElementById("score").innerText = "Score: " + score + "/32";
        I1clicked = true;
    }
});

var I2clicked = false;
$('#I2').click(function () {
    text.textContent = fact2;
    text.style.top = img2.style.top;
    text.style.left = img2.style.left;
    text.style.position = 'absolute';
    document.body.appendChild(text);
    //check if item was already clicked
    if (!I2clicked) {
        score++;
        // sends you to win page if at 32 points
        if (score == 32) {
            window.open("win.html", "_self");
        }
        document.getElementById("score").innerText = "Score: " + score + "/32";
        I2clicked = true;
    }
});

var I3clicked = false;
$('#I3').click(function () {
    text.textContent = fact3;
    text.style.top = img3.style.top;
    text.style.left = img3.style.left;
    text.style.position = 'absolute';
    document.body.appendChild(text);
    //check if item was already clicked
    if (!I3clicked) {
        score++;
        // sends you to win page if at 32 points
        if (score == 32) {
            window.open("win.html", "_self");
        }
        document.getElementById("score").innerText = "Score: " + score + "/32";
        I3clicked = true;
    }
});

var I4clicked = false;
$('#I4').click(function () {
    text.textContent = fact4;
    text.style.top = img4.style.top;
    text.style.left = img4.style.left;
    text.style.position = 'absolute';
    document.body.appendChild(text);
    //check if item was already clicked
    if (!I4clicked) {
        score++;
        // sends you to win page if at 32 points
        if (score == 32) {
            window.open("win.html", "_self");
        }
        document.getElementById("score").innerText = "Score: " + score + "/32";
        I4clicked = true;
    }
});

// function for goBack button, keeps score persitant
function goBack() {
    if (!(I1clicked && I2clicked && I3clicked && I4clicked)) {
        alert("You must gather all four data points before moving on");
    } else {
        localStorage.setItem("score", score);
        switch (localStorage.getItem("planet")) {
            case "mer":
                localStorage.setItem("merVisited", "true");
                break;
            case "ven":
                localStorage.setItem("venVisited", "true");
                break;
            case "ear":
                localStorage.setItem("earVisited", "true");
                break;
            case "mar":
                localStorage.setItem("marVisited", "true");
                break;
            case "jup":
                localStorage.setItem("jupVisited", "true");
                break;
            case "sat":
                localStorage.setItem("satVisited", "true");
                break;
            case "ura":
                localStorage.setItem("uraVisited", "true");
                break;
            case "nep":
                localStorage.setItem("nepVisited", "true");
                break;
            case "":
                break;
        }
        window.open("planets.html", "_self");
    }

}
