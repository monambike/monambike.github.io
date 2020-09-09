// VARIABLES
var divDisplay = document.getElementById("div-display");
var svgDots = document.getElementsByClassName("svg-dot");
var i = 0;

// Display content
divDisplay.style.display = "block";
updateIframeSize();

// Function to select dot
function selectDot(dotSelected){
	// Resets
	for(i = 0; i < svgDots.length; i++){
		svgDots[i].classList.remove("selected");
	}

	// Attribute the class
	svgDots[dotSelected].classList.add("selected");
}