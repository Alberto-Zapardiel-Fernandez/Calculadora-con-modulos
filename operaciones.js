const regex = /^[0-9]$/;
export const sumar = (a, b) => a + b;
export const restar = (a, b) => a - b;
export const multiplicar = (a, b) => a * b;
export const dividir = (a, b) => a / b;
export const esNumero = (numero) => (numero.match(regex) ? true : false);
