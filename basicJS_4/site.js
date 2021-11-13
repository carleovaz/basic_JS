/*
Reescribe if..else usando múltiples operadores ternarios '?'.

Para legibilidad, es recomendable dividir el código en múltiples líneas.

let mensaje;

if (login == 'Empleado') 
{
  mensaje = 'Hola';
} 

else if (login == 'Director') 
{
  mensaje = 'Felicidades';
} 

else if (login == '') 
{
  mensaje = 'No te has registrado';
} 

else 
{
  mensaje = '';
}
*/

let mensaje;
let login = prompt("¿Quien eres?");
let comparacion=(login=="Empleado")? 'Hola' : '';
console.log(comparacion);
comparacion=(login=="Director")? 'Felicidades' : '';
console.log(comparacion);
comparacion=(login=="")? 'No te has registrado' : '';
console.log(comparacion);

