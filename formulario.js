function validarNumero(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode <= 31 || /\d/.test(evt.key)){
        return true;
    }
    
    evt.preventDefault();
    return false;
}

function chequearEntradas(evt){
    if(evt.target.value){
        document.querySelector(`#${evt.target.name}Mensaje`).textContent = '';
    }
}

function chequearSelect(evt)
{
    if(evt.target.value){
        document.querySelector('#lugarMensaje').textContent = '';
    }
}

function enviar(evt){
    evt.preventDefault();

    let esValido = true;

    Array.from(evt.target.elements).forEach(function(element){

        if(element.required && !element.value) {
            document.querySelector(`#${element.name}Mensaje`).textContent = 'Este campo es requerido';
            esValido = false;
        }

        if(element.name == 'email' && element.value && !(/\S+@\S+\.\S+/.test(element.value))){
            document.querySelector(`#${element.name}Mensaje`).textContent = 'Ingrese un email válido';
            esValido = false;
        }
    });

    if(celular.value.length != 10 && celular.value != ''){
        document.querySelector('#celularMensaje').textContent = 'El campo debe contener 10 dígitos';
    }

    if(esValido){
        location.href = location.href.replace('index.html','guardar.html');
    }

}

function readyFunction(){
    const identificacion = document.querySelector('#identificacion');
    identificacion.addEventListener('keydown',validarNumero);    
    const celular = document.querySelector('#celular');
    celular.addEventListener('keydown',validarNumero);
    const formulario = document.querySelector('.jsFormulario');
    formulario.addEventListener('submit',enviar);
    Array.from(document.querySelectorAll('.jsEntrada')).forEach(function(elemento){
    elemento.addEventListener('blur',chequearEntradas);
    });
    const lugar = document.querySelector('#lugar');
    lugar.addEventListener('change',chequearSelect);

}

document.addEventListener('DOMContentLoaded', readyFunction, false);


      