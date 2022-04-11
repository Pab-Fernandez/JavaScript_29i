//alert ("hola, pablito");
//
// // alert ("Hola, Juan Carlos"); 
// 
// //mensajes en consola!  
// console.log ("Hola, Juan Carlos");
// console.log (5+21);
// //mostrar en navegador
// document.write ("A sample text");
// //mejor práctica es usar un archivo externo. ahora va.

//let frase= prompt("Ingrese una frase");
//let vocales="";
//
//for  (let i= 0; i< frase.length; i++)   {
//    
//    let letra= frase.charAt(i);
// if { (letra ==="a" || letra ==="e" || letra ==="i" || letra ==="o" || letra ==="u")
// vocales= letra 
//}
//
//}

// revisar el anterior, no salió. 

// Hoy ========= Arrays!
// lista o matriz 

let alumnos = ["Pablito", "Gominola", "Mondonga", "Almóndiga"];

//mostrar un elemento
alumnos [2] // "Gominola"

//mostrar el último elemento. Considerando que el primer elemento es "0"
alumnos [alumnos.length -1]

//Concatenar elementos en un string. 
console.log (`Los alumnos más mejores son: ${alumnos.join (",")}`);

// Iterar los elementos de un arreglo
for (let i =0; i <alumnos.length; i++) {

    console.log (`Hola soy ${alumnos[i]}`);

}
for (const alumno of alumnos) {
    console.log (`Hola, soy ${alumno}`)
}
//Agregar un elemento al arreglo
alumnos.push ("Daniel", "Cocomiel");

alumnos.unshift ("Gibraltar") //para agregar al principio

//Eliminar elementos del arreglo
alumnos.pop ();
alumnos.shift (); //Se elimina al primero.
alumnos.push ("Gibraltar")// ahi lo volví a agregar pero al final. ¿Cachai?

// Encontrar la posición o índidce de un elemento.
console.log (alumnos.indexOf("Mondonga")) 

//Determinar si un elemento existe en el arreglo.
console.log (alumnos.includes("Mondonga"))
console.log (alumnos.includes("Gonzo"))

//Eliminar un elemento por su posición!

let pos= alumnos.indexOf("Gominola")
alumnos.splice(pos,1) // el primer dato es "desde donde" 
//y el segundo cuántas posiciones elimina

// eliminar varios elementos:
alumnos.splice (0,3);

//Agregar alumnos

alumnos.push ("Nicanor", "Bichito", "Baldoza");
alumnos.splice("2,0", "Mokoko", "Gonzo"); // de esta manera se agregan datos con splice
// en una posición específica y con (0) para que reemplace 
alumnos.splice (5,1,"Olegario") //Reemplaza elementos en una posición
//es imoprtante delimitar la cantidad de elementos a reemplazar 

//nuevo arreglo
let alumnas = ["Jacinta", "Marlene", "Audrey", "Malvina"];

//concatenar arreglas
let comision=  alumnos.concat(alumnas);

// ordenar arrelo a-z
console.log (comision.sort());
//ordenar de la z-a
console.log (comision.reverse()); //revierte el orden que ya establecí.

//Extraer en un nuevo arreglo

let ausentes= comision.slice(3,7); //extrae todo desde la posición con la siguiente 
//como límite o sea,si quería eliminar la posición 7 tenía que poner 8. porque cuenta los elementos.

/* Tarea 1: 
Leer una cadena de texto y generar un array con la función split(). Posteriormente, mostrar la siguiente información: 
- Número de palabras 
- primera palabra
- última palabra 
- las palabras colocadas en orden inverso
- las palabras ordenadas de la a la z  
- las palabras ordenadas de la z a la a. 
- Sacar toda esta información en consola
*/
let frase="La sonrisa es la mejor respuesta para una mirada"
let palabras = frase.toLocaleLowerCase().split(" ");
console.log (`la cantidad de palabras es ${palabras.length}`);
console.log (`la primera palabra es "${palabras [0]}"`);
console.log (`La última palabra es "${palabras[palabras.length +1]}"`);
console.log (palabras.reverse());
console.log (palabras.sort());

console.log (palabras.sort().reverse())

/* Tarea 2:
Tenemos una lista de números, el usuario ingresará un número y le diremos si ese número se encuentra en la lista o no
*/

let lista = [12,32, 432,64, 78,545];
let numero= parseInt(prompt('Ingrese un número'));

if (lista.includes(numero)) {
    console.log (`El número ${numero} se encuentra en la lista`);
} else {
    console.log (`El número ingresado no está en la lista`)
}