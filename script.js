const btnTranslate = document.querySelector('#btn-translate');
const txtInput = document.querySelector('#txt-input');
const outputDiv = document.querySelector('#output');

// let serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
let serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error);
    alert('something went wrong!');
}

function clickHandler() {
    const inputText = txtInput.value; // taking input
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            let translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler);
}

btnTranslate.addEventListener('click', clickHandler);