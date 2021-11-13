/*
Crear una función leerNumero que pide números hasta que el visitante introduce un valor numérico válido.

El valor resultante debe ser devuelto como número.

El visitante también puede parar el proceso introduciendo una línea vacía o presionando “CANCELAR”. En este caso, la función debería devolver null.

*/

let number;
number=leerNumero(number);
console.log(number);
function leerNumero(number)
{ 
    do
    {
        number = prompt("Dame un numero");
    }
    while( !isFinite(number) );
    if (number === null || number === '') return null;
    return +number;

}