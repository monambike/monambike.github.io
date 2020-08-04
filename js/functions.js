// VARIABLES
var iframeHeader = document.getElementById("iframe-header");
var iframeFooter = document.getElementById("iframe-footer");
var divDisplay = document.getElementById("div-display");

function onBodyLoad(){
	divDisplay.style.display = "block";
	updateIframeSize();
	console.log("Body has been loaded!");
}


setInterval(updateIframeSize, 500);