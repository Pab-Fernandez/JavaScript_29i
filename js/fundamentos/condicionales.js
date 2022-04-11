//condicionales

/*
si tal cosa se cumple
entonces hacer algo
sino
hacer otra cosa o no hacer nada
*/

//if else

// if (condition) {

//   //tareas
// }

let numero = prompt("Ingrese un número");
console.log(numero);
numero = parseInt(numero);

// numero par
if (isNaN(numero)) {
  console.warn("El valor ingresado no es un número");
} else {
  if (numero % 2 === 0) {
    console.log("El número es par");
  } else {
    //tarea
    console.error("El número no es par");
  }
}

/*
===
>=
<=
!=
<
>
*/

let valor = true;
if (valor) {
  console.log("El valor es verdadero");
} else {
  console.warn("El valor es falso");
}

/*
VALORES EVALUADOS COMO FALSOS
- null
- undefined
- ""
- 0
- NaN

*/

/*
1.- En una tienda de venta de repuestos automotrices se tiene que el descuento depende del monto de venta, asi:
Se ingresa el monto de venta y el sistema debe calcular el descuento y restarlo del total segun las reglas:
- Si el monto es menor que 500 no hay descuento
- Si el monto está comprendido entre 500 y 1000 inclusive, el descuento es de 5%
- Si el monto está comprendido entre 1000 y 7000 inclusive, el descuento es del 11%
- Si el monto está comprendido entre 7000 y 15000 inclusive, el descuento es del 18%
- Si el monto es mayor de 15000 el desc es del 25%.
por ejemplo si se ingresa un monto de 5000 el descuento sera 550, y por tanto el valor a pagar sera 4450.

*/

// OR || y AND &&

// si el precio es mayor a 500 o menor o igual a 1000 entonces el descuento es del 5%
// let monto = parseFloat(prompt("Ingrese el monto del repuesto"));

if (!isNaN(monto)) {
  if (monto < 500) {
    console.log("Montos menores a $500 no tienen descuento");
  } else if (monto >= 500 && monto <= 1000) {
    let montoDescuento = monto * 0.05;
    let montoConDescuento = monto - montoDescuento;
    console.log(
      `El monto a pagar con el descuento del 5% es de ${montoConDescuento}`
    );
  } else if (monto > 1000 && monto <= 7000) {
    console.log("El descuento es del 11%");
  } else if (monto > 7000 && monto <= 15000) {
    console.log("El descuento es del 18%");
  } else {
    console.log("El descuento es del 25%");
  }
} else {
  console.warn("El valor ingresado no es un número");
}

//fiesta
//--------
//Solo puede entrar un mayor de edad osea edad >= 18
// si no es mayor de edad entonces debe ir acompañado de un tutor

let edad = 15;
let tutor = true;

if (edad >= 18) {
  console.log("Bienvenido a la fiesta 🤩");
} else if (tutor) {
  console.log("Podés entrar, pero no te separes de tu tutor 🤔");
} else {
  console.warn("Es menor de edad, no puede entrar 😞");
}

//Otra forma
if (edad >= 18 || tutor) {
  console.log("Bienvenido a la fiesta 🤩");
} else {
  console.warn("Es menor de edad, no puede entrar 😞");
}

//Switch
// switch (variable) {
//   case 10:
//     //accion
//     break;
//     case 20:
//       //accion
//       break;

//   default:
//     //mensaje
//     break;
// }

// Se nos pide hacer una aplicación para una verdulería que segun la fruta ingresada nos devuelva el precio del kilo
// let fruta = "kiwi";
let fruta = prompt("Ingrese la fruta que desea consultar");

switch (fruta) {
  case "manzana":
    console.log("El precio del kilo de manzana es de $350");
    break;
  case "naranja":
    console.log("El precio del kilo de naranja es de $180");
    break;
  case "banana":
    console.log("El precio del kilo de banana es de $200");
    break;
  case "pomelo":
  case "mango":
    console.log("El precio del kilo de pomelo o mango es de $300");
    break;

  default:
    console.log(`Lo siento, no disponemos de ${fruta} en stock`);
    break;
}

// Hacer una aplicación que nos devuelva un mensaje diciendo que día de la semana es
// */

let dia = new Date().getDay();

switch (dia) {
  case 0:
    console.log("Hoy es Domingo 🤩");
    break;
  case 1:
    console.log("Hoy es Lunes 🥱");
    break;
  case 2:
    console.log("Hoy es Martes 😐");
    break;
  case 3:
    console.log("Hoy es Miércoles 🙂");
    // document.write("Hoy es Miércoles 🙂");
    // alert("Hoy es Miércoles 🙂");

    break;
  case 4:
    console.log("Hoy es Jueves 🤓");
    break;
  case 5:
    console.log("Hoy es Viernes 😎");
    break;
  case 6:
    console.log("Hoy es Sábado 🤪");
    break;
}

let resultado = 0;
let elemento = "Que vamos a hacer después";

switch (true) {
  case elemento >= 10:
    console.log("Soy muy bueno usando switch");
    break;
  case elemento < 10 && elemento > 0:
    resultado = Math.pow(elemento, 2);
    console.log(`El número ${elemento} elevado al cuadrado es de ${resultado}`);
    break;
  case elemento <= 0:
    resultado = elemento + elemento;
    console.log(
      `El número ${elemento} sumado consigo mismo es de ${resultado}`
    );
    break;

  default:
    console.error("No sos tan bueno que digamos");
    break;
}

// Se nos pide hacer un programa donde el usuario ingrese dos números y la operación a realizar. Según la operación (suma, resta, multiplicación y división) devolver en consola el resultado

let num1 = parseFloat(prompt("Ingrese el primer número"));
let num2 = parseFloat(prompt("Ingrese el segundo número"));

if (isNaN(num1) || isNaN(num2)) {
  console.error(
    "Alguno de los valores ingresados no es válido, vuelva a ingresar los valores"
  );
} else {
  let operacion = prompt(
    "Ingrese la operación a realizar (suma, resta, multiplicacion, division)"
  );

  switch (operacion) {
    case "suma":
    case "+":
      console.log(`${num1} + ${num2} = ${num1 + num2}`);

      break;
    case "resta":
    case "-":
      console.log(`${num1} - ${num2} = ${num1 - num2}`);

      break;
    case "multiplicacion":
    case "x":
      console.log(`${num1} x ${num2} = ${num1 * num2}`);

      break;
    case "division":
    case "/":
      console.log(`${num1} / ${num2} = ${num1 / num2}`);

      break;

    default:
      console.warn("La operación ingresada no es válida");
      break;
  }
}

//Esto hice yo
//Condicionales
/*
//if else 
let number = prompt ("Ingrese un número");
//convertirlo en entero. 
number = parseInt (number)
if (condition) {
    //tareas
}
if (isNaN (number)) {

 console.warn ("El valor ingresado no es un número");}
 else {
//numeros

if (number % 2 === 0) {
    console.log ("El número es par");
} else {
    //tarea
    console.error ("El número no es par");
}
 }
/* 
=== 
>=
<=
!=
<
>
*/
/*@
let value = 45;
if (value) {
   console.log ('El valor es verdadero');
} else {
    console.warn ('El valor es falso')
}

/* 
Valores evaluados como falsos:
null
undefined
""
0
Nan
*/

//Condicionales AND (&&)  y OR
//and es sólo si ambas se cumplen, or es si una cosa o la otra se cumplen. 

//actividad TAREA dctos
/*

let monto = parseFloat(prompt('Ingrese el monto del respuesto'));
if (monto < 500) {
    console.log ('Montos menores a 500 no tienen descuento')
} else if (monto >=500 && monto <=1000){  
    console.log ('El descuento es de 5%');
} else if (monto >1000 && monto <=7000){
    console.log ('El descuento es del 11%');

} else if (monto >7000 && monto <=15000) {
    console.log ('El descuento es del 18%');
} else { 
    console.log ('El descuento es del 25%');
}

/* Hoy se ve bucle. Tengo que actualizar!*/ 

/*while (condition) {
    //tareas o accciones que se tienen que ejecutar
}
let vecesSumar=10
let totalSuma=0

while (vecesSumar >0) {
    
    totalSuma+=1;
    // TotalSuma -TotalSuma +1
 
    vecesSumar +=1;
    console.log (`Total de la suma: ${totalSuma} | veces que sumó: ${vecesSumar}`);
}

console.log (`Total: ${TotalSuma}`);
*/

// Tarea:
// Crear un script que calcule la tabla del 2

/*let tabla= 2
let valor=1

while (valor<=10) {
console.log (`${tabla} x ${valor} = ${tabla * valor}`);

}
*/

// do while

/*let vueltas =3;
let respuesta = "";

do {
    //acciones o tareas
    respuesta = prompt ("Ingrese un nombre");
    console.log (`Hola ${respuesta}! Bienvenid@ `);
    vueltas --;

} while (vueltas > 0) ;

//Tarea 
/* Crear una aplicación tipo trivia que pregunte al usuario la cpaital de un país.
El usuario tendrá  tres inetntos, si falla pierde. */

/*let respuestaCorrecta= "HELSINKI";
let acierto= false;
let contador=3 ;

while (contador > 0 && acierto === false) {
let respuestaUsuario = prompt("Capital de Finlandia");
if (respuestaUsuario.toUpperCase() === respuestaCorrecta) {
    acierto=true;
    console.log (`Muy bien! Acertaste!!`);
}

contador++;
}
if (acierto === false) {
    console.log (`Perdiste. La vida sigue`);
}
*/

// for ---------------------------------------------
//
//let index =0 for (;index < array.lenght; index++)
//for (let index= 0; index < array.length; index++) 
    //tareas o acciones
    // Siempre tiene que tener 3 parámentros. puede haber una variable por fuera del for
    // primer valor (index) es la inicialización. segundo valor es la  condición
    //para la acción y la tercera es la cantidad de veces que se resuelve el ciclo. 
    
//let tabla= parseInt (prompt("Ingrese la tabla a calcular"))
/*for (let index= 1; index <=10; index++) {
    console.log (`${tabla} x ${index} = ${tabla * index}`);
}
*/
//ejemplo con "while"
/*while (tabla) {
    console.log (`====================`)
    console.log(`Tabla del 3 ${tabla}`)
    console.log (`====================`)
    for (let index= 1; index <=10; index++) {
        console.log (`${tabla} x ${index} = ${tabla * index}`);
    }

}
*/
// =========TAREA
//Según la cantidad de alumnos ingresados cargar los nombres
//let cantidadDeAlumnos =parseInt(prompt("Ingrese la cantidad de alumnos"))
//let lista =""
//let nombre=""

//if (isNaN(cantidadDeAlumnos)) {
 //for (let i =0; i < cantidadDeAlumnos; i++) 
 //nombre = prompt("Ingrese el nombnre del alumno") 
// if (nombre=== )

 //validarian si no manda nada 
  lista +=`${nombre}\n`;
    
//}else{

//console.log (`la cantidad ingresada no es válida`);
//}

