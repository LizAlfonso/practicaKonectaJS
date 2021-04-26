function chequearPrimerNumero(evt){

    if(evt.target.value){
        document.getElementById('mensajeNum1').textContent='';
    }
}

function chequearSegundoNumero(evt){
        
    if(evt.target.value){
        document.getElementById('mensajeNum2').textContent='';
    }
}

function chequearSelect(evt){
    
    if(evt.target.value){
        document.getElementById('mensajeSelect').textContent='';
    }
}

function realizarOperacion(evt){
    evt.preventDefault();
    let primerNumero = document.getElementById('primerNumero').value;
    let segundoNumero = document.getElementById('segundoNumero').value;
    let operacion = document.getElementById('operacion').value;

    if(primerNumero===''){
        document.getElementById('mensajeNum1').textContent = 'El campo se encuentra vacío';
    }
    if(segundoNumero===''){
        document.getElementById('mensajeNum2').textContent = 'El campo se encuentra vacío';
    }
    if(operacion===''){
        document.getElementById('mensajeSelect').textContent = 'Seleccione una de las operaciones';
    }
    
    if(primerNumero && segundoNumero && operacion)
    {
        let resultado;

        switch(operacion){

            case 'suma':
              resultado = +primerNumero + +segundoNumero;
              document.getElementById('resultado').value= primerNumero + ' + ' + segundoNumero + ' = ' + resultado;
            break;
      
            case 'resta':
              resultado = primerNumero - segundoNumero;
              document.getElementById('resultado').value= primerNumero + ' - ' + segundoNumero + ' = ' + resultado;
            break;
      
            case 'multiplicacion':
              resultado = primerNumero * segundoNumero;
              document.getElementById('resultado').value= primerNumero + ' x ' + segundoNumero + ' = ' + resultado;
            break;
      
            default:
              resultado = primerNumero/segundoNumero;
              document.getElementById('resultado').value= primerNumero + ' ÷ ' + segundoNumero + ' = ' + resultado.toFixed(4);
      
          }
    }    
  }

  function limpiarFormulario(){
    document.getElementById('mensajeNum1').textContent='';
    document.getElementById('mensajeNum2').textContent='';
    document.getElementById('mensajeSelect').textContent='';
  }

  function readyFunction(){
    const formulario2 = document.querySelector('.jsFormulario2');
    formulario2.addEventListener('submit',realizarOperacion);
    const primerNumero = document.querySelector('#primerNumero');
    primerNumero.addEventListener('blur',chequearPrimerNumero);
    const segundoNumero = document.querySelector('#segundoNumero');
    segundoNumero.addEventListener('blur',chequearSegundoNumero);
    const operacion = document.querySelector('#operacion');
    operacion.addEventListener('change',chequearSelect);
    const limpiar = document.querySelector('#limpiar');
    limpiar.addEventListener('click',limpiarFormulario)
  }

  document.addEventListener('DOMContentLoaded', readyFunction, false);
      