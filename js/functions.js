document.body.onload = function(event){
	// Variáveis
	var browserLang = navigator.language || navigator.userLanguage;
	var supportedLang = [
		"en-US",
		"es-ES",
		"pt-BR",
		"ja-JP"
	];
	var pageLang = 0;
	// Recebendo traduções disponíveis
	var translationArquiveJson = 0;
	translationArquiveJs = JSON.parse(translationArquiveJson);
	// Contador
	var i = 0;

	translateBrowserLanguage();
}

function switchLanguage(){
	langDropdown = document.getElementById("language-dropdown").style;

	if(langDropdown.display === "none"){
		langDropdown.display = "block";
	}else{
		langDropdown.display = "none";
	}
}