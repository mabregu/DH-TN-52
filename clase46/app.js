// capturar los elementos
const form = document.getElementById('form')
// espera a que se cargue el dom
document.addEventListener('DOMContentLoaded', inicioApp);
// funciones
function inicioApp() {
    form.name.addEventListener('blur', validarFormulario)
    form.email.addEventListener('blur', validarFormulario)
    form.password.addEventListener('blur', validarFormulario)
    form.conf_password.addEventListener('blur', validarFormulario)
    form.paises.addEventListener('blur', validarFormulario)
    
    form.addEventListener('submit', registrarUsuario)
}

function registrarUsuario(evt) {
    evt.preventDefault();
    
    if (form.name.value == "") {
        alert("Debes ingresar tu nombre")
    }
    
    if (form.email.value == "") {
        alert("Debes ingresar tu email")
    }
    
    if (form.password.value == "") {
        alert("Debes ingresar tu password")
    }
    
    if (form.conf_password.value == "") {
        alert("Debes ingresar tu password")
    }
}

function resetForm() {
    form.reset();
}

function validarFormulario(evt) {
    let input = evt.target
    if (input.tagName == 'INPUT') {
        // validar el error
        if (!input.value.length) {
            input.style.borderBottomColor = 'red';
            input.style.color = 'red';
            
            mostrarError("Debe ingresar un valor!")
        } else {
            input.style.borderBottomColor = 'green';
            input.style.color = 'black';
        }
    }
}

let contentError = document.getElementById('error');

function mostrarError(error) {
    contentError.innerHTML = `
        <p class='error'>${error}</p>
    `
}