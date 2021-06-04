// FUNCTIONS
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Switch between open and close the language layout menu
function switchLanguage(){
	langDropdown = document.getElementById("ul-dropdown-language").style;

	if(langDropdown.display === "none"){
		langDropdown.display = "block";
	}
	else{
		langDropdown.display = "none";
	}
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<