/*
La siguiente función devuelve true si el parámetro edad es mayor que 18.

En cualquier otro caso pide una confirmación y la devuelve como resultado.


function comprobarEdad(edad) 
{
  if (edad > 18) 
  {
    return true;
  } 
  else 
  {
    return confirm('¿Tienes el permiso de tus padres para acceder a esta página?');
  }
}

Reescribe manteniendo el mismo comportamiento, pero sin if, en una única línea.

Haz dos variantes:

Usando un operador de interrogación ?
Usando OR ||
*/

let edad;
edad=comprobarEdad(edad);
alert(edad);

function comprobarEdad(edad)
{
    edad=prompt("¿Cual es tu edad?");
    return(edad>18)? "Eres mayor de edad" : "¿Tienes el permiso de tus padres para acceder a esta página?";
     
}

function comprobarEdad2(edad)
{
    edad=prompt("Dime otra edad");
    return (edad > 18) || confirm('¿Tienes el permiso de tus padres para acceder a esta página?');
}



