/*
Escribe una condición “if” para comprobar que edad está entre 14 y 90 inclusive.

“Inclusive” significa que edad puede alcanzar los límites 14 o 90.
*/

let edad=prompt("¿Cual es tu edad?");
if(edad >=14 && edad <=90)
{
    console.log(edad);
}

else
{
    console.log("Tu edad no es computable.")
}