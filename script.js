let email = document.getElementById("campo-email")

function enviarEmail(event) {
    let emailDigitado = email.value
    console.log(emailDigitado)
    event.preventDefault()
}