// 3. Arrays
// a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
// "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por
// consola los meses 5 y 11 (utilizar console.log).

var months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

console.log(months[4], months[10]);

// b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

months.sort();
console.log(months);

// c. Agregar un elemento al principio y al final del array (utilizar unshift y push).

months.unshift("prepend");
months.push("append");
console.log(months);

// d. Quitar un elemento del principio y del final del array (utilizar shift y pop).

months.shift();
months.pop();
console.log(months);

// e. Invertir el orden del array (utilizar reverse).

months.reverse();
console.log(months);

// f. Unir todos los elementos del array en un único string donde cada mes este
// separado por un guión - (utilizar join).

months.join("-");
console.log(months);

// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre
// (utilizar slice).

var months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

var monthsCopy = months.slice(4, 11);
console.log(monthsCopy);
