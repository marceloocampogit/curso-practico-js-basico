///////////////// VARIABLES ////////////////////

let h1 = document.querySelector('h1');
let input1 = document.querySelector('#calculo1');
let input2 = document.querySelector('#calculo2');
let btn = document.querySelector('#btnCalcular');
let pResultado = document.querySelector('#resultado');

///////////////// EVENTOS ////////////////////

btn.addEventListener('click', calcular);

///////////////// FUNCIONES ////////////////////

function calcular() {
    let resultado = parseInt(input1.value) + parseInt(input2.value);
    pResultado.innerText = "Resultado: " + resultado;
}