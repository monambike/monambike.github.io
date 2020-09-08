// VARIABLES
var iframeHeader;
var iframeFooter;
var divDisplay = document.getElementById("div-display");

function updateIframeSize(){
	setTimeout(3000);
	iframeHeader = document.getElementById("iframe-header");
	iframeFooter = document.getElementById("iframe-footer");
	iframeHeader.style.height = iframeHeader.contentWindow.document.body.scrollHeight + "px";
	iframeFooter.style.height = iframeFooter.contentWindow.document.body.scrollHeight + "px";
}

setInterval(updateIframeSize, 500);