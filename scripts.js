var captureEncriptar = document.querySelector("#encriptar")
var captureDesencriptar = document.querySelector("#desencriptar")
var captureCopy = document.querySelector(".copy")
var textOutput = document.querySelector(".entries")

function encriptar() {
    const vocalesReemplazadas = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    }
    var inputText = document.querySelector(".entries")
    var textValue = inputText.value
    var arrayLetras = textValue.split("")
    for (var word = 0; word < arrayLetras.length; word++) {
        for (let key in vocalesReemplazadas) {
            if (arrayLetras[word] == key) {
                arrayLetras[word] = vocalesReemplazadas[key]
            }
        }
    }
    var palabra = ""
    for (var letra of arrayLetras) {
        palabra += letra
    }
    document.querySelector(".img__notfound").style.display = "none"
    document.querySelector(".hidden__div").style.display = "block"
    return palabra
}

function desencriptar() {
    var inputEncripted = document.querySelector(".entries")
    var valueInputEncripted = inputEncripted.value
    var textoDecifrado = valueInputEncripted.replace(/ai/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u")
    return textoDecifrado
}

function showTextEncripted() {
    var textArea = document.querySelector(".output")
    textArea.innerHTML = encriptar()
}

function showTextDesencripted() {
    var textArea = document.querySelector(".output")
    textArea.innerHTML = desencriptar()
}

function copyClipboard() {
    var textCopy = document.querySelector(".output")
    textCopy.select()
    navigator.clipboard.writeText(textCopy.value)
    console.log(textCopy.value)
}


textOutput.focus()
captureEncriptar.onclick = showTextEncripted
captureDesencriptar.onclick = showTextDesencripted
captureCopy.onclick = copyClipboard