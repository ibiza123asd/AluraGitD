function ocultar() {
    document.getElementById("ocultar-elemento").style.display = "none";
    document.getElementById("mostrar-elemento").style.display = "block";
}
function encriptarDatos() {
    ocultar();
    var texto = document.getElementById("textoEncriptado").
            value.toString().toLowerCase();
    //i -> toma letra mayusculas y minusculas
    //g -> toma en cuenta toda la linea o la oración con espacios
    //m -> toma en cuenta multiples lineas
    var textoEncriptado = texto.replace(/e/img, "enter");
    textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    //mostrarlo en el textarea
    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    //linea para cuando damos encriptar nos saldrá el botón de copiar
    document.getElementById("btnCopiar").style.display = "show";
    //linea para que aparezca el btn debajo del texto despues de dar click en botn encriptar
    document.getElementById("btnCopiar").style.display = "inherit";
}
function desencriptarDatos() {
    var texto = document.getElementById("textoEncriptado").
            value.toString().toLowerCase();
    var textoEncriptado = texto.replace(/enter/img, "e");
    textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;

}
function copiar() {

    var contenido = document.querySelector("#textoDesencriptado");
    //seleccionar contenido
    contenido.select();
    //copiar contenido
    document.execCommand("copy");

}

var btnEncriptar = document.querySelector("#btnEncriptar");
btnEncriptar.onclick = encriptarDatos;

var btnDesencriptar = document.querySelector("#btnDesencriptar");
btnDesencriptar.onclick = desencriptarDatos;

var btnCopiar = document.querySelector("#btnCopiar");
btnCopiar.onclick = copiar;
