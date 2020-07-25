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

	// Verifica se o idioma do browser é compatível com o do site
	for(i = 0; i < supportedLang.length; i++){
		/* Se for compatível, e se o arquivo JSON foi carregado
		dá o valor para a variável e traduz */
		if(browserLang === supportedLang[i] && translationArquiveJson !== 0){
			pageLang = supportedLang[i];
			localStorage.setItem("language", pageLang);
			translatePage();
			return;
		}
	}
}

function translatePage(pageLang){
	var translateElements = document.getElementsByClassName("translate");

	if(pageLang !== 0){
		for(i = 0; i < translateElements.length; i++){
			translateElements[i].innerHTML = translationArquiveJs[pageLang][translateElements[i].getAttribute("langSrc")];
		}
		return;
	}
}

function switchLanguage(){
	langDropdown = document.getElementById("language-dropdown").style;

	if(langDropdown.display === "none"){
		langDropdown.display = "block";
	}else{
		langDropdown.display = "none";
	}
}