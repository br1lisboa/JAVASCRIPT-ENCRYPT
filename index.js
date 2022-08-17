const inputMensaje = document.querySelector("#mensaje");
const inputResultado = document.querySelector("#resultado");

const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");
const btnEscuchar = document.querySelector("#escuchar");

const contenedorErrores = document.querySelector(".contenedor-errores");

function validarMensaje() {
    //Borrar mensaje previos
    let erroresPrevios = contenedorErrores.querySelectorAll(".error")
    for (let err of erroresPrevios) {
        contenedorErrores.removeChild(err)
    }

    let mensaje = inputMensaje.value;
    let letrasValidas = "qwertyuiopasdfghjklñzxcvbnm ";
    let mensajeError = document.createDocumentFragment();
    for (let letra of mensaje) {
        if (!letrasValidas.includes(letra)) {
            let p = document.createElement("p")
            p.setAttribute("class", "error")
            p.textContent = `La letra ${letra} no es valida`
            mensajeError.appendChild(p)
        }
    }
    contenedorErrores.appendChild(mensajeError)
    if (mensajeError.children.length === 0) {
        return true
    }
    return false
}

function encriptar() {
    if (!validarMensaje()) return;
    let mensaje = inputMensaje.value;
    let mensajeEncriptado = mensaje
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("o", "ober")
        .replaceAll("a", "ai")
        .replaceAll("u", "ufat")

    inputResultado.value = mensajeEncriptado;
}

function desencriptar() {
    if (!validarMensaje()) return;
    let mensajeEncriptado = inputMensaje.value;
    let mensaje = mensajeEncriptado
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ober", "o")
        .replaceAll("ai", "a")
        .replaceAll("ufat", "u")

    inputResultado.value = mensaje;
}

function copiar() {
    let mensajeEncriptado = inputResultado.value
    navigator.clipboard.writeText(mensajeEncriptado)
    inputMensaje.value = ""
    inputMensaje.focus()
}

function escuchar() {
    let mensajeEncriptado = inputResultado.value;
    let msg = new SpeechSynthesisUtterance();
    msg.text = mensajeEncriptado;
    msg.lang = "es-ES";
    window.speechSynthesis.speak(msg);
}

btnEncriptar.onclick = encriptar;

btnDesencriptar.onclick = desencriptar;

btnCopiar.onclick = copiar;

btnEscuchar.onclick = escuchar;