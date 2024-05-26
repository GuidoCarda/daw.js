// 6. Funciones
// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
// Ejecutar la función y guardar el resultado en una variable, mostrando el valor de
// dicha variable en la consola del navegador.

function sum(num1, num2) {
  return num1 + num2;
}

var result = sum(5, 5);
console.log(result);

// b. A la función suma anterior, agregarle una validación para controlar si alguno de
// los parámetros no es un número, mostrar una alerta aclarando que uno de los
// // parámetros tiene error y retornar el valor NaN como resultado.

function sum(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    alert("Parametros invalidos");
    return NaN;
  }

  return num1 + num2;
}

var result = sum("test", 5);
console.log(result);

// c. Crear una función validate integer que reciba un número como parámetro y
// devuelva verdadero si es un número entero.

function validateInteger(number) {
  return number % 1 === 0;
}

// d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los
// números sean enteros. En caso que haya decimales mostrar un alerta con el
// error y retorna el número convertido a entero (redondeado).

function sum(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    alert("Parametros invalidos");
    return NaN;
  }

  if (validateInteger(num1) || validateInteger(num2)) {
    alert("Advertencia! Ingreso numeros con decimales");
    return Math.floor(num1 + num2);
  }

  return num1 + num2;
}

var result = sum(1.7, 5);
console.log(result);

// e. Convertir la validación del ejercicio 6d) en una función separada y llamarla
// dentro de la función suma probando que todo siga funcionando igual.

function validateDecimals(num1, num2) {
  if (validateInteger(num1) || validateInteger(num2)) {
    alert("Advertencia! Ingreso numeros con decimales");
  }
}

function sum(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    alert("Parametros invalidos");
    return NaN;
  }

  validateDecimals(num1, num2);

  return Math.floor(num1 + num2);
}

var result = sum(5.5, 5);
console.log(result);
