let nombre= "Pomodoro";
let apellido= "Py";

let frase= '    Bienvenidos a la clase         '
//cuantos caracteres

console.log("El nombre tiene", nombre.length, "caracteres");

console.log(nombre.length);

console.log(frase.length);

//como quitar espacios en blanco adelante y atras
console.log(frase);

frase = frase.trim();

console.log(frase);
console.log(frase.length);

//mayusculas
console.log(apellido.toUpperCase());

//minusculas
console.log(nombre.toLowerCase());

//extraer una letra
console.log(frase.charAt(10));
console.log(frase.substring(0, 2));

console.log(nombre.substring(15));

console.log ("El nombre tiene", frase.length)

// separar letras

console.log (apellido.split(""))
console.log (frase.split (" "))

let texto= "hola-q-ase";

console.log (texto.split ("-"));
// join es para los array. no para string. 
let arreglotexto = texto.split (" ");
// unir arrays de palabras"
console.log (arreglotexto.join(" "));

// obetner la última letra de una palabra o frase

console.log (apellido.charAt (apellido.length -1))

//Tarea 
let palabra="marmota"

//pasarla a mayúsculas
//pasarla a minúsculas
//Capitalizar la palabra (la primera letra esté en mayúsculas)
console.log (palabra.toUpperCase ());
console.log (palabra.toLowerCase());
console.log (palabra.charAt(0).toUpperCase());
//let primeraletra = palabra.charAt(0);
//let primeraletracaps = primeraletra.toUpperCase();
//let restoPalabra = palabra.substring(1);
//let palabracapitalizada = primeraletracaps + restoPalabra;

let palabracapitalizada = palabra.charAt(0).toUpperCase() + palabra.substring (1); 
console.log (palabracapitalizada);

//Template String.

console.log ('Bienevnido nombre apellido, gracias por tu visita')
console.log (`Bienvenido ${nombre} ${apellido}, gracias por tu visita. Tu edad es de ${edad}`)
