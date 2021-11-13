/*Escribe una función min(a,b) que devuelve el menor de los dos números a y b.

Por ejemplo:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

*/
let a=2;
let b=5;
let comparacion = min(a,b);
console.log(comparacion);
function min(a1,b1)
{
    return(a1>b1)? a1 + " es mayor que " + b1 : b1 + " es mayor que " + a1;
}

let a2=3;
let b2=-1;
comparacion = min2(a2,b2);
console.log(comparacion);
function min2(a2,b2)
{
    return(a2>b2)? a2 + " es mayor que " + b2 : b2 + " es mayor que " + a2;
}

let a3=1;
let b3=1;
comparacion = min2(a3,b3);
console.log(comparacion);
function min3(a3,b3)
{
    return(a3>=b3)? a3 + " es igual " + b3 : b3 + "que " + a3;
}