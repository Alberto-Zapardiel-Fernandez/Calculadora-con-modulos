import {
  sumar,
  restar,
  multiplicar,
  dividir,
  esNumero,
} from './operaciones.js';

const $buttons = document.getElementsByTagName('button'),
  $visor = document.getElementById('number');

const SUMAR = 'sumar',
  RESTAR = 'restar',
  MULTIPLICAR = 'multiplicar',
  DIVIDIR = 'dividir';
let valor1 = 0,
  operacion = '';

for (let button of $buttons) {
  button.addEventListener('click', (e) => {
    const valor = e.target.textContent;
    /* Comprobamos si es número */
    if (esNumero(valor)) {
      $visor.placeholder += valor;
    } else {
      if (valor === 'C') {
        $visor.placeholder = '';
        valor1 = 0;
      }
      if (valor === '+') {
        defineOperacion(valor, SUMAR);
      }
      if (valor === '-') {
        defineOperacion(valor, RESTAR);
      }
      if (valor === '*') {
        defineOperacion(valor, MULTIPLICAR);
      }
      if (valor === '/') {
        defineOperacion(valor, DIVIDIR);
      }
      if (valor === '=' && operacion === SUMAR) {
        valor1 = sumar(valor1, parseInt($visor.placeholder));
        $visor.placeholder = valor1;
        operacion = '';
      }
      if (valor === '=' && operacion === RESTAR) {
        console.log($visor.placeholder.slice(1));
        valor1 = restar(valor1, parseInt($visor.placeholder.slice(1)));
        $visor.placeholder = valor1;
        operacion = '';
      }
      if (valor === '=' && operacion === MULTIPLICAR) {
        valor1 = multiplicar(valor1, parseInt($visor.placeholder.slice(1)));
        $visor.placeholder = valor1;
        operacion = '';
      }
      if (valor === '=' && operacion === DIVIDIR) {
        valor1 = dividir(valor1, parseInt($visor.placeholder.slice(1)));
        $visor.placeholder = valor1;
        operacion = '';
      }
    }
  });
}
function defineOperacion(valor, op) {
  operacion = '';
  valor1 = parseInt($visor.placeholder);
  $visor.placeholder = valor;
  operacion = op;
}
