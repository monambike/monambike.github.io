// VARIABLES
var iframeHeader = document.getElementById("iframe-header");
var iframeFooter = document.getElementById("iframe-footer");
var divDisplay = document.getElementById("div-display");

function updateIframeSize(){
	iframeHeader.style.height = iframeHeader.contentWindow.document.body.scrollHeight + "px";
	iframeFooter.style.height = iframeFooter.contentWindow.document.body.scrollHeight + "px";
}

setInterval(updateIframeSize, 500);