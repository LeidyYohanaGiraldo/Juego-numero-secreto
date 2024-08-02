
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
}

function verificarIntento() {
    
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    document.getElementById('reiniciar').removeAttribute('disabled');

    console.log( intentos);
    
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número secreto en
             ${intentos} ${intentos === 1 ? 'intento' : 'intentos'} `);
    }else {
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número es menor');
   
        } else {
            asignarTextoElemento('p', 'El número mayor');
        }
        intentos ++;
        limpiarCaja();
    }
}

function limpiarCaja() {
    
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
   
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los números posibles
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', ' Ya se sortearon todos los números posibles');
    } else {
        // Si el número generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
asignarTextoElemento('h1', "Juego del número secreto");
asignarTextoElemento('p', `Indica un número entre 1 y ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}

condicionesIniciales();
