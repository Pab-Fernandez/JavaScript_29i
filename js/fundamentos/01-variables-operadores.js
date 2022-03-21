
 //Variables
 // Es un espacio en memoria que usamos para guardar datos. 
 //Primero se declaran: se las crea. 
 //Se las inicializa: Se les asigna un valor. 

 var nombre 
 nombre = "Genario"
 //ya no se usa "var"

 let apellido = ("Bombón")

 const pi= 3.14;
 // sólo se deckara una variable una vez
 
 //Tipos de datos:

 //String: Los de texto

let cliente= "Gorvachov"
let alumno= "Kinder"
//camelcase
let newClient= "Pepe"
let an_old_client= "Pompín"

//UpperCamelCase
let NewClient="Peposo"
//number
let numero1= 15
let numero2= -45
let numero3= 15.56

//Boolean (important)

let comprar= true
let comer= false

//null 
let billetera = null

//undefined 
let coso= "";

//Array
let array= ["Hi,John", 15, true]
let alumnos= ["José", "Dinho", "Gonzo"]

//Object 
let persona= {
    nombre:"Gonzo", 
    apellido:"Honorio",
    edad: 45,
}

//Operadores

//Aritméticos
let num1= 20;
let num2=2;
let suma= numero1 + numero2;
let resta= numero1 - numero2;
let multiplicacion= numero1 * numero3;
let division= numero1 / numero2;
//let resto= numero1 % numero3;
let resto= num1 % num2;

// unitarios
++num2
--num2
//Relacionales (se muestra en consola para más claridad)
num1 =22
num2 ="22"
console.log (num1 == num2);
//console.log (numero1 == numero2);
console.log (num1 === num2);
console.log (numero1 >= numero2);
console.log (numero1 <= numero2);
console.log (num1 >= num2);
console.log (numero1 != numero2);
console.log ('el resultado de la suma es ' + suma);
console.log ("el resultado de la resta es " + resta);
console.log ("el resultado de la resta es" , resta);

//negación
let active= true
console.log (active)
