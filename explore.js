const shipSel = localStorage.getItem("shipSel");
const score = localStorage.getItem("score");
const planet = localStorage.getItem("planet");

// Display score
document.getElementById("score").innerText = "Score: " + score + "/32";