document.body.onload = function(event){
	translateWithBrowserLanguage();
}

function switchLanguage(){
	langDropdown = document.getElementById("language-dropdown").style;

	if(langDropdown.display === "none"){
		langDropdown.display = "block";
	}
	else{
		langDropdown.display = "none";
	}
}