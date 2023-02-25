///////////////// VARIABLES ////////////////////

let h1 = document.querySelector('h1');
let input1 = document.querySelector('#calculo1');
let input2 = document.querySelector('#calculo2');
let pResultado = document.querySelector('#resultado');

let btnSuma = document.querySelector('#btnSuma');
let btnResta = document.querySelector('#btnResta');
let btnDivide = document.querySelector('#btnDivide');
let btnMultiplica = document.querySelector('#btnMultiplica');

///////////////// EVENTOS ////////////////////

btnSuma.addEventListener('click', calcularSuma);
btnResta.addEventListener('click', calcularResta);
btnDivide.addEventListener('click', calcularDivision);
btnMultiplica.addEventListener('click', calcularMultiplicacion);

///////////////// FUNCIONES ////////////////////

function calcularSuma() {
    let resultado = parseInt(input1.value) + parseInt(input2.value);
    pResultado.innerText = "Resultado: " + resultado;
}

function calcularResta() {
    let resultado = parseInt(input1.value) - parseInt(input2.value);
    pResultado.innerText = "Resultado: " + resultado;
}

function calcularMultiplicacion() {
    let resultado = parseInt(input1.value) * parseInt(input2.value);
    pResultado.innerText = "Resultado: " + resultado;
}

function calcularDivision() {
    let resultado = parseInt(input1.value) / parseInt(input2.value);
    pResultado.innerText = "Resultado: " + resultado;
}