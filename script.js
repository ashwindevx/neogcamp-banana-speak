const textArea = document.querySelector('#txt-input');
const btn = document.querySelector('#btn-translate');
const output = document.querySelector('#output');

function translate() {
    let sentence = textArea.value;
    output.innerHTML = sentence;
}
btn.addEventListener('click', translate);