const score = localStorage.getItem("score");

function goBack() {
        window.open("planets.html","_self");
    }
	
document.getElementById("final").innerText = "Your final score was " + score + "/32, you didn't collect the data on all the planets.";
