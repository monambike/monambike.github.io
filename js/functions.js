// VARIABLES
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// ELEMENTS
// Divisions
var iframeHeader = document.getElementById("iframe-header");
var iframeFooter = document.getElementById("iframe-footer");

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<





// FUNCTIONS
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Updates Iframe for Header
function updateIframeSize(){
	try{
		iframeHeader.style.height = iframeHeader.contentWindow.document.body.scrollHeight + "px";
		iframeFooter.style.height = iframeFooter.contentWindow.document.body.scrollHeight + "px";
	
	}catch(e){
		return;
	}
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<





// Updates Iframe for header from time to time
setInterval(updateIframeSize, 500);