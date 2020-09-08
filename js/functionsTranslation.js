// VARIABLES
// Language
var browserLang = navigator.language || navigator.userLanguage;
var supportedLang = [
	"pt-BR",
	"en-US",
	"es-ES",
	"ja-JP"
];
// Retrieving avaible translations
translationArchiveJs = JSON.parse(translationArchiveJson);
var pageLang = 0;
// Counter
var i = 0;

translateWithBrowserLanguage();

function translateWithBrowserLanguage(){
	console.log("function 1 executed!");
	// Verifies if local storage variable is empty
	if(localStorage.getItem("language") === null){
		// Verifies if browser language exists in the site archive
		for(i = 0; i < supportedLang.length; i++){
			/* If so, and if JSON file has been loaded
			gives the value to the variable and translates */
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
	console.log("function 2 executed!");
	var translateElements = document.getElementsByClassName("translate");

	if(localStorage.getItem("language") !== null){
		for(i = 0; i < translateElements.length; i++){
			translateElements[i].innerHTML = translationArchiveJs[localStorage.getItem("language")][translateElements[i].getAttribute("langSrc")];
		}
		return;
	}
}