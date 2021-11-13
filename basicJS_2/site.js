/*
Usando if..else, escribe el código que obtiene un número a través de prompt y luego muestra en un alert:

1, si el valor es mayor que cero,
-1, si es menor que cero,
0, si es igual a cero.
En esta tarea asumimos que la entrada es siempre un número.

*/

let valor = prompt("Dame un numero");

if(valor > 0)
{
    console.log("El valor es mayor que cero.");
}

else if (valor < 0)
{
    console.log("El valor es menor que cero.");
}

else
{
    console.log("El valor es igual a cero.");
}

