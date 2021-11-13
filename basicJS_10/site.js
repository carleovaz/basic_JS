/*
Escribe un bucle que con un prompt que pida un número mayor que 100. Si el visitante introduce otro número lo pide de nuevo.

El bucle debe preguntar por un número hasta que el visitante introduzca un número mayor que 100 o cancele el input/introduzca una línea vacía.

Aquí asumimos que el visitante sólo introduce números. No hay necesidad de implementar un manejo especial de valores no numéricos en esta tarea.
*/

let num;
 
do 
{
  num = prompt("Introduzca un número mayor que 100", 0);
} 
while (num <= 100 && num);
