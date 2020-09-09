// VARIABLES
var divDisplay = document.getElementById("div-display");
var svgDots = document.getElementsByClassName("svg-dot");
var i = 0;

// Display content
divDisplay.style.display = "block";
updateIframeSize();

// Function to select dot
function selectDot(dotSelected){
	console.log("You've selected dot number " + dotSelected + " that corresponds to " + svgDots[dotSelected] + ".");

	for(i = 0; i < svgDots.length; i++){
		svgDots[i].style.color = "var(--gray-2)";
	}

	svgDots[dotSelected].style.color = "var(--white)"
}