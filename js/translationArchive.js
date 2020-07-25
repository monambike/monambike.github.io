function translateBrowserLanguage(){
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

var translationArquiveJson = `{
	"en-US":{
		"developer": "Developer",
		"welcome": "Welcome to my site!"
	},

	"pt-BR":{
		"developer": "Desenvolvedor",
		"welcome": "Seja bem vindo!"
	}
}`