// 2. Strings

// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el
// texto en mayúscula (utilizar toUpperCase).

var word = "programming";
console.log(word.toUpperCase());

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
// string con los primeros 5 caracteres guardando el resultado en una nueva
// variable (utilizar substring).

var text;
text = "Programming is fun, sometimes...";
var firstFiveChars = text.substring(0, 5);
console.log(firstFiveChars);

// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
// string con los últimos 3 caracteres guardando el resultado en una nueva variable
// (utilizar substring).

var word = "Normalization";
var lastThreeChars = word.substring(word.length - 3);
console.log(lastThreeChars);

// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
// string con la primera letra en mayúscula y las demás en minúscula. Guardar el
// resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y
// el operador +).

var word = "OvERaCHIeVer";
var capitalizedWord = word[0].toUpperCase() + word.substring(1).toLowerCase();
console.log(capitalizedWord);

// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en
// blanco. Encontrar la posición del primer espacio en blanco y guardarla en una
// variable (utilizar indexOf).

var sentence = "Hi teacher, how are you?";
var firstSpaceIndex = sentence.indexOf(" ");
console.log(firstSpaceIndex);

// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y
// algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para
// generar un nuevo string que tenga la primera letra de ambas palabras en
// mayúscula y las demás letras en minúscula (utilizar indexOf, substring,
// toUpperCase, toLowerCase y el operador +).

var longWords = "oUTstAnDing perFORmance";
var spaceIndex = longWords.indexOf(" ");
var result =
  longWords[0].toUpperCase() +
  longWords.substring(1, spaceIndex).toLowerCase() +
  " " +
  longWords[spaceIndex + 1].toUpperCase() +
  longWords.substring(spaceIndex + 2).toLowerCase();

console.log(result);
