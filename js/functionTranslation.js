// Variáveis
// Idioma
var browserLang = navigator.language || navigator.userLanguage;
var supportedLang = [
	"pt-BR",
	"en-US",
	"es-ES",
	"ja-JP"
];
// Recebendo traduções disponíveis
translationArchiveJs = JSON.parse(translationArchiveJson);
var pageLang = 0;
// Contador
var i = 0;

function translateWithBrowserLanguage(){
	// Verifica se a variável no local storage está vazia
	if(localStorage.getItem("language") === null){
		// Verifica se o idioma do browser é compatível com o do site
		for(i = 0; i < supportedLang.length; i++){
			/* Se for compatível, e se o arquivo JSON foi carregado
			dá o valor para a variável e traduz */
			if(browserLang === supportedLang[i] && translationArchiveJson !== 0){
				pageLang = supportedLang[i];
				localStorage.setItem("language", pageLang);
				translatePage();
				return;
			}
		}
	}
	else{
		translatePage();
	}
}

function chooseLanguage(chosenLanguage){
	localStorage.setItem("language", chosenLanguage);
	window.parent.translatePage();
}

function translatePage(){
	var translateElements = document.getElementsByClassName("translate");

	if(localStorage.getItem("language") !== null){
		for(i = 0; i < translateElements.length; i++){
			translateElements[i].innerHTML = translationArchiveJs[localStorage.getItem("language")][translateElements[i].getAttribute("langSrc")];
		}
		return;
	}
}