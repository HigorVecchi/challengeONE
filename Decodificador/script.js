var textoDigitado = document.querySelector(".texto-digitado");
var textoFinal = document.querySelector(".texto-final");

function encriptar() {
    var texto = textoDigitado.value;

    var resultCriptografia = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById("textofinal").innerHTML = resultCriptografia
}


function desencriptar() {
    var texto = textoDigitado.value;

    var resultDescriptografia = texto.replace(/enter/g, "e"). replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById("textofinal").innerHTML = resultDescriptografia
}

function copiar() {
    var textoCopiar = document.getElementById("textofinal");
    textoCopiar.select();
    textoCopiar.setSelectionRange(0, 99999999);
    document.execCommand("copy");
    alert("Texto copiado");
}
