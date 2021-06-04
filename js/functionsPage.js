// VARIABLES
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// ELEMENTS
// Title
var slideTitle = document.getElementsByClassName("h3-slide-title");
// Divisions
var divDisplay = document.getElementById("div-display");
var galleries = document.getElementsByClassName("div-gallery");
// Image
var svgDots = document.getElementsByClassName("svg-dot");

// Set divDisplay default style to "block"
divDisplay.style.display = "block";

// Counter
var i = 0;

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<





// FUNCTIONS
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Function to select dot in slides
function selectDot(dotSelected){
	// Resets
	for(i = 0; i < svgDots.length; i++){
		svgDots[i].classList.remove("selected");
	}

	// Attribute the class
	svgDots[dotSelected].classList.add("selected");

	updateSlide(dotSelected);
}

function updateSlide(dotSelected){
	for(i = 0; i < galleries.length; i++){
		slideTitle[i].classList.add("hidden");
		galleries[i].classList.add("hidden");
	}

	try{
		slideTitle[dotSelected].classList.remove("hidden");
		galleries[dotSelected].classList.remove("hidden");
	}
	catch(e){
		console.log("It was not possible to find a gallery"
			+ "\n" + e);
	}
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<





updateIframeSize();