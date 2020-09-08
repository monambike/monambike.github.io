// VARIABLES
var iframeHeader = document.getElementById("iframe-header");
var iframeFooter = document.getElementById("iframe-footer");

function updateIframeSize(){
	try{
		iframeHeader.style.height = iframeHeader.contentWindow.document.body.scrollHeight + "px";
		iframeFooter.style.height = iframeFooter.contentWindow.document.body.scrollHeight + "px";
	
	}catch(e){
		return;
	}
}

setInterval(updateIframeSize, 500);