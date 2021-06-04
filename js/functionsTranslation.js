// VARIABLES
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Language
// Gets current user's navigation language
var browserLang = navigator.language || navigator.userLanguage;
// Array containing supported langs by the site (languages presents in "translationArchique.js")
var supportedLang = [
	"pt-BR",
	"en-US",
	"es-ES",
	"ja-JP"
];
// Retrieving avaible translations in "translationArchive.js"
translationArchiveJs = JSON.parse(translationArchiveJson);
var pageLang = 0;
// Counter
var i = 0;

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<





// TRANSLATION FUNCTIONS
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function translateWithBrowserLanguage(){
	// If local storage variable containing language is empty
	if(localStorage.getItem("language") === null){
		// Verifies if browser language exists in the site archive
		for(i = 0; i < supportedLang.length; i++){
			// If so, and if JSON file has been loaded gives
			// the value to the variable and translates
			if(browserLang === supportedLang[i] && translationArchiveJson !== 0){
				pageLang = supportedLang[i];
				localStorage.setItem("language", pageLang);
				translatePage();
				return;
			}
		}
	}
	// If the local storage variable has a language
	else{
		// Try to translate with it
		translatePage();
	}
}

// When the user switch the language using the menu
function chooseLanguage(chosenLanguage){
	localStorage.setItem("language", chosenLanguage);

	// Updates page
	window.parent.translatePage();
}

function translatePage(){
	// Get all elements with "translate" class on it
	var translateElements = document.getElementsByClassName("translate");

	// If the language in localStorage exists
	if(localStorage.getItem("language") !== null){
		// For each element in the page
		for(i = 0; i < translateElements.length; i++){
			// Makes a translation
			translateElements[i].innerHTML = translationArchiveJs[localStorage.getItem("language")][translateElements[i].getAttribute("langSrc")];
		}

		return;
	}
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<





translateWithBrowserLanguage();